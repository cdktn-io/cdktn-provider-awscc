# `dataAwsccSagemakerComputeQuota` Submodule <a name="`dataAwsccSagemakerComputeQuota` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerComputeQuota <a name="DataAwsccSagemakerComputeQuota" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/sagemaker_compute_quota awscc_sagemaker_compute_quota}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

new dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota(scope: Construct, id: string, config: DataAwsccSagemakerComputeQuotaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig">DataAwsccSagemakerComputeQuotaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig">DataAwsccSagemakerComputeQuotaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerComputeQuota resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.isConstruct"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.isTerraformElement"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.isTerraformDataSource"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.generateConfigForImport"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSagemakerComputeQuota resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerComputeQuota to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerComputeQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/sagemaker_compute_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerComputeQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.activationState">activationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.computeQuotaArn">computeQuotaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.computeQuotaConfig">computeQuotaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference">DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.computeQuotaId">computeQuotaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.computeQuotaTarget">computeQuotaTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference">DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.computeQuotaVersion">computeQuotaVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList">DataAwsccSagemakerComputeQuotaTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `activationState`<sup>Required</sup> <a name="activationState" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.activationState"></a>

```typescript
public readonly activationState: string;
```

- *Type:* string

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `computeQuotaArn`<sup>Required</sup> <a name="computeQuotaArn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.computeQuotaArn"></a>

```typescript
public readonly computeQuotaArn: string;
```

- *Type:* string

---

##### `computeQuotaConfig`<sup>Required</sup> <a name="computeQuotaConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.computeQuotaConfig"></a>

```typescript
public readonly computeQuotaConfig: DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference">DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference</a>

---

##### `computeQuotaId`<sup>Required</sup> <a name="computeQuotaId" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.computeQuotaId"></a>

```typescript
public readonly computeQuotaId: string;
```

- *Type:* string

---

##### `computeQuotaTarget`<sup>Required</sup> <a name="computeQuotaTarget" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.computeQuotaTarget"></a>

```typescript
public readonly computeQuotaTarget: DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference">DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference</a>

---

##### `computeQuotaVersion`<sup>Required</sup> <a name="computeQuotaVersion" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.computeQuotaVersion"></a>

```typescript
public readonly computeQuotaVersion: number;
```

- *Type:* number

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.tags"></a>

```typescript
public readonly tags: DataAwsccSagemakerComputeQuotaTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList">DataAwsccSagemakerComputeQuotaTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuota.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerComputeQuotaComputeQuotaConfig <a name="DataAwsccSagemakerComputeQuotaComputeQuotaConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

const dataAwsccSagemakerComputeQuotaComputeQuotaConfig: dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfig = { ... }
```


### DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources <a name="DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

const dataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources: dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources = { ... }
```


### DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition <a name="DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

const dataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition: dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition = { ... }
```


### DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig <a name="DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

const dataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig: dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig = { ... }
```


### DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits <a name="DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

const dataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits: dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits = { ... }
```


### DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition <a name="DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

const dataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition: dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition = { ... }
```


### DataAwsccSagemakerComputeQuotaComputeQuotaTarget <a name="DataAwsccSagemakerComputeQuotaComputeQuotaTarget" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTarget.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

const dataAwsccSagemakerComputeQuotaComputeQuotaTarget: dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTarget = { ... }
```


### DataAwsccSagemakerComputeQuotaConfig <a name="DataAwsccSagemakerComputeQuotaConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

const dataAwsccSagemakerComputeQuotaConfig: dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/sagemaker_compute_quota#id DataAwsccSagemakerComputeQuota#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerComputeQuotaTags <a name="DataAwsccSagemakerComputeQuotaTags" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTags.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

const dataAwsccSagemakerComputeQuotaTags: dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference <a name="DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

new dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a>

---


### DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList <a name="DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

new dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference <a name="DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

new dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.acceleratorPartition">acceleratorPartition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference">DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.accelerators">accelerators</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.memoryInGiB">memoryInGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.vCpu">vCpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorPartition`<sup>Required</sup> <a name="acceleratorPartition" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.acceleratorPartition"></a>

```typescript
public readonly acceleratorPartition: DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference">DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference</a>

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.accelerators"></a>

```typescript
public readonly accelerators: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `memoryInGiB`<sup>Required</sup> <a name="memoryInGiB" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.memoryInGiB"></a>

```typescript
public readonly memoryInGiB: number;
```

- *Type:* number

---

##### `vCpu`<sup>Required</sup> <a name="vCpu" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.vCpu"></a>

```typescript
public readonly vCpu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>

---


### DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference <a name="DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

new dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.property.computeQuotaResources">computeQuotaResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList">DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.property.preemptTeamTasks">preemptTeamTasks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.property.resourceSharingConfig">resourceSharingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference">DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfig">DataAwsccSagemakerComputeQuotaComputeQuotaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeQuotaResources`<sup>Required</sup> <a name="computeQuotaResources" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.property.computeQuotaResources"></a>

```typescript
public readonly computeQuotaResources: DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList">DataAwsccSagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList</a>

---

##### `preemptTeamTasks`<sup>Required</sup> <a name="preemptTeamTasks" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.property.preemptTeamTasks"></a>

```typescript
public readonly preemptTeamTasks: string;
```

- *Type:* string

---

##### `resourceSharingConfig`<sup>Required</sup> <a name="resourceSharingConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.property.resourceSharingConfig"></a>

```typescript
public readonly resourceSharingConfig: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference">DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerComputeQuotaComputeQuotaConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfig">DataAwsccSagemakerComputeQuotaComputeQuotaConfig</a>

---


### DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference <a name="DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

new dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a>

---


### DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList <a name="DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

new dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference <a name="DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

new dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.acceleratorPartition">acceleratorPartition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference">DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.accelerators">accelerators</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.memoryInGiB">memoryInGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.vCpu">vCpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorPartition`<sup>Required</sup> <a name="acceleratorPartition" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.acceleratorPartition"></a>

```typescript
public readonly acceleratorPartition: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference">DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference</a>

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.accelerators"></a>

```typescript
public readonly accelerators: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `memoryInGiB`<sup>Required</sup> <a name="memoryInGiB" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.memoryInGiB"></a>

```typescript
public readonly memoryInGiB: number;
```

- *Type:* number

---

##### `vCpu`<sup>Required</sup> <a name="vCpu" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.vCpu"></a>

```typescript
public readonly vCpu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>

---


### DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference <a name="DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

new dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.absoluteBorrowLimits">absoluteBorrowLimits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList">DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.borrowLimit">borrowLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `absoluteBorrowLimits`<sup>Required</sup> <a name="absoluteBorrowLimits" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.absoluteBorrowLimits"></a>

```typescript
public readonly absoluteBorrowLimits: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList">DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList</a>

---

##### `borrowLimit`<sup>Required</sup> <a name="borrowLimit" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.borrowLimit"></a>

```typescript
public readonly borrowLimit: number;
```

- *Type:* number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">DataAwsccSagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a>

---


### DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference <a name="DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

new dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fairShareWeight">fairShareWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.property.teamName">teamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTarget">DataAwsccSagemakerComputeQuotaComputeQuotaTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fairShareWeight`<sup>Required</sup> <a name="fairShareWeight" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fairShareWeight"></a>

```typescript
public readonly fairShareWeight: number;
```

- *Type:* number

---

##### `teamName`<sup>Required</sup> <a name="teamName" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.property.teamName"></a>

```typescript
public readonly teamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerComputeQuotaComputeQuotaTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaComputeQuotaTarget">DataAwsccSagemakerComputeQuotaComputeQuotaTarget</a>

---


### DataAwsccSagemakerComputeQuotaTagsList <a name="DataAwsccSagemakerComputeQuotaTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

new dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerComputeQuotaTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerComputeQuotaTagsOutputReference <a name="DataAwsccSagemakerComputeQuotaTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerComputeQuota } from '@cdktn/provider-awscc'

new dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTags">DataAwsccSagemakerComputeQuotaTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerComputeQuotaTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerComputeQuota.DataAwsccSagemakerComputeQuotaTags">DataAwsccSagemakerComputeQuotaTags</a>

---



