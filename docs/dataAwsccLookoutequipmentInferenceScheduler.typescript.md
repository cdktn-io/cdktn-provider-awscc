# `dataAwsccLookoutequipmentInferenceScheduler` Submodule <a name="`dataAwsccLookoutequipmentInferenceScheduler` Submodule" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLookoutequipmentInferenceScheduler <a name="DataAwsccLookoutequipmentInferenceScheduler" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lookoutequipment_inference_scheduler awscc_lookoutequipment_inference_scheduler}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler(scope: Construct, id: string, config: DataAwsccLookoutequipmentInferenceSchedulerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig">DataAwsccLookoutequipmentInferenceSchedulerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig">DataAwsccLookoutequipmentInferenceSchedulerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isConstruct"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformElement"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformDataSource"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLookoutequipmentInferenceScheduler to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLookoutequipmentInferenceScheduler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lookoutequipment_inference_scheduler#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLookoutequipmentInferenceScheduler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutes">dataDelayOffsetInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataInputConfiguration">dataInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataOutputConfiguration">dataOutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataUploadFrequency">dataUploadFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.inferenceSchedulerArn">inferenceSchedulerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.inferenceSchedulerName">inferenceSchedulerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.serverSideKmsKeyId">serverSideKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList">DataAwsccLookoutequipmentInferenceSchedulerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `dataDelayOffsetInMinutes`<sup>Required</sup> <a name="dataDelayOffsetInMinutes" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutes"></a>

```typescript
public readonly dataDelayOffsetInMinutes: number;
```

- *Type:* number

---

##### `dataInputConfiguration`<sup>Required</sup> <a name="dataInputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataInputConfiguration"></a>

```typescript
public readonly dataInputConfiguration: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference</a>

---

##### `dataOutputConfiguration`<sup>Required</sup> <a name="dataOutputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataOutputConfiguration"></a>

```typescript
public readonly dataOutputConfiguration: DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference</a>

---

##### `dataUploadFrequency`<sup>Required</sup> <a name="dataUploadFrequency" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataUploadFrequency"></a>

```typescript
public readonly dataUploadFrequency: string;
```

- *Type:* string

---

##### `inferenceSchedulerArn`<sup>Required</sup> <a name="inferenceSchedulerArn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.inferenceSchedulerArn"></a>

```typescript
public readonly inferenceSchedulerArn: string;
```

- *Type:* string

---

##### `inferenceSchedulerName`<sup>Required</sup> <a name="inferenceSchedulerName" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.inferenceSchedulerName"></a>

```typescript
public readonly inferenceSchedulerName: string;
```

- *Type:* string

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `serverSideKmsKeyId`<sup>Required</sup> <a name="serverSideKmsKeyId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.serverSideKmsKeyId"></a>

```typescript
public readonly serverSideKmsKeyId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.tags"></a>

```typescript
public readonly tags: DataAwsccLookoutequipmentInferenceSchedulerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList">DataAwsccLookoutequipmentInferenceSchedulerTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLookoutequipmentInferenceSchedulerConfig <a name="DataAwsccLookoutequipmentInferenceSchedulerConfig" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

const dataAwsccLookoutequipmentInferenceSchedulerConfig: dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lookoutequipment_inference_scheduler#id DataAwsccLookoutequipmentInferenceScheduler#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

const dataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration: dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration = { ... }
```


### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

const dataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration: dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration = { ... }
```


### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

const dataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration: dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration = { ... }
```


### DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

const dataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration: dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration = { ... }
```


### DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

const dataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration: dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration = { ... }
```


### DataAwsccLookoutequipmentInferenceSchedulerTags <a name="DataAwsccLookoutequipmentInferenceSchedulerTags" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTags.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

const dataAwsccLookoutequipmentInferenceSchedulerTags: dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiter">componentTimestampDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `componentTimestampDelimiter`<sup>Required</sup> <a name="componentTimestampDelimiter" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiter"></a>

```typescript
public readonly componentTimestampDelimiter: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfiguration">inferenceInputNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffset">inputTimeZoneOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfiguration">s3InputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inferenceInputNameConfiguration`<sup>Required</sup> <a name="inferenceInputNameConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfiguration"></a>

```typescript
public readonly inferenceInputNameConfiguration: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference</a>

---

##### `inputTimeZoneOffset`<sup>Required</sup> <a name="inputTimeZoneOffset" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffset"></a>

```typescript
public readonly inputTimeZoneOffset: string;
```

- *Type:* string

---

##### `s3InputConfiguration`<sup>Required</sup> <a name="s3InputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfiguration"></a>

```typescript
public readonly s3InputConfiguration: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfiguration">s3OutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `s3OutputConfiguration`<sup>Required</sup> <a name="s3OutputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfiguration"></a>

```typescript
public readonly s3OutputConfiguration: DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerTagsList <a name="DataAwsccLookoutequipmentInferenceSchedulerTagsList" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.get"></a>

```typescript
public get(index: number): DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutequipmentInferenceScheduler } from '@cdktn/provider-awscc'

new dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTags">DataAwsccLookoutequipmentInferenceSchedulerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutequipmentInferenceSchedulerTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTags">DataAwsccLookoutequipmentInferenceSchedulerTags</a>

---



