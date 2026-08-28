# `dataAwsccMediatailorPrefetchSchedule` Submodule <a name="`dataAwsccMediatailorPrefetchSchedule` Submodule" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediatailorPrefetchSchedule <a name="DataAwsccMediatailorPrefetchSchedule" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediatailor_prefetch_schedule awscc_mediatailor_prefetch_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule(scope: Construct, id: string, config: DataAwsccMediatailorPrefetchScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig">DataAwsccMediatailorPrefetchScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig">DataAwsccMediatailorPrefetchScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediatailorPrefetchSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isConstruct"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformElement"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformDataSource"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMediatailorPrefetchSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediatailorPrefetchSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediatailorPrefetchSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediatailor_prefetch_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediatailorPrefetchSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.consumption">consumption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference">DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.playbackConfigurationName">playbackConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.recurringPrefetchConfiguration">recurringPrefetchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.retrieval">retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.scheduleType">scheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList">DataAwsccMediatailorPrefetchScheduleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `consumption`<sup>Required</sup> <a name="consumption" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.consumption"></a>

```typescript
public readonly consumption: DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference">DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `playbackConfigurationName`<sup>Required</sup> <a name="playbackConfigurationName" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.playbackConfigurationName"></a>

```typescript
public readonly playbackConfigurationName: string;
```

- *Type:* string

---

##### `recurringPrefetchConfiguration`<sup>Required</sup> <a name="recurringPrefetchConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.recurringPrefetchConfiguration"></a>

```typescript
public readonly recurringPrefetchConfiguration: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference</a>

---

##### `retrieval`<sup>Required</sup> <a name="retrieval" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.retrieval"></a>

```typescript
public readonly retrieval: DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference</a>

---

##### `scheduleType`<sup>Required</sup> <a name="scheduleType" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.scheduleType"></a>

```typescript
public readonly scheduleType: string;
```

- *Type:* string

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.tags"></a>

```typescript
public readonly tags: DataAwsccMediatailorPrefetchScheduleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList">DataAwsccMediatailorPrefetchScheduleTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediatailorPrefetchScheduleConfig <a name="DataAwsccMediatailorPrefetchScheduleConfig" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

const dataAwsccMediatailorPrefetchScheduleConfig: dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediatailor_prefetch_schedule#id DataAwsccMediatailorPrefetchSchedule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediatailorPrefetchScheduleConsumption <a name="DataAwsccMediatailorPrefetchScheduleConsumption" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumption.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

const dataAwsccMediatailorPrefetchScheduleConsumption: dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumption = { ... }
```


### DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria <a name="DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

const dataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria: dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria = { ... }
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

const dataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration: dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration = { ... }
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

const dataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption: dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption = { ... }
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

const dataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria: dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria = { ... }
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

const dataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval: dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval = { ... }
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

const dataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow: dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow = { ... }
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

const dataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration: dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration = { ... }
```


### DataAwsccMediatailorPrefetchScheduleRetrieval <a name="DataAwsccMediatailorPrefetchScheduleRetrieval" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrieval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrieval.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

const dataAwsccMediatailorPrefetchScheduleRetrieval: dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrieval = { ... }
```


### DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow <a name="DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

const dataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow: dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow = { ... }
```


### DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration <a name="DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

const dataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration: dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration = { ... }
```


### DataAwsccMediatailorPrefetchScheduleTags <a name="DataAwsccMediatailorPrefetchScheduleTags" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTags.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

const dataAwsccMediatailorPrefetchScheduleTags: dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList <a name="DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get"></a>

```typescript
public get(index: number): DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference <a name="DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable">dynamicVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamicVariable`<sup>Required</sup> <a name="dynamicVariable" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable"></a>

```typescript
public readonly dynamicVariable: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>

---


### DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference <a name="DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.availMatchingCriteria">availMatchingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList">DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumption">DataAwsccMediatailorPrefetchScheduleConsumption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availMatchingCriteria`<sup>Required</sup> <a name="availMatchingCriteria" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.availMatchingCriteria"></a>

```typescript
public readonly availMatchingCriteria: DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList">DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList</a>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediatailorPrefetchScheduleConsumption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumption">DataAwsccMediatailorPrefetchScheduleConsumption</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringConsumption">recurringConsumption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringRetrieval">recurringRetrieval</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `recurringConsumption`<sup>Required</sup> <a name="recurringConsumption" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringConsumption"></a>

```typescript
public readonly recurringConsumption: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference</a>

---

##### `recurringRetrieval`<sup>Required</sup> <a name="recurringRetrieval" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringRetrieval"></a>

```typescript
public readonly recurringRetrieval: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get"></a>

```typescript
public get(index: number): DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable">dynamicVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamicVariable`<sup>Required</sup> <a name="dynamicVariable" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable"></a>

```typescript
public readonly dynamicVariable: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.availMatchingCriteria">availMatchingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.retrievedAdExpirationSeconds">retrievedAdExpirationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availMatchingCriteria`<sup>Required</sup> <a name="availMatchingCriteria" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.availMatchingCriteria"></a>

```typescript
public readonly availMatchingCriteria: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList</a>

---

##### `retrievedAdExpirationSeconds`<sup>Required</sup> <a name="retrievedAdExpirationSeconds" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.retrievedAdExpirationSeconds"></a>

```typescript
public readonly retrievedAdExpirationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.delayAfterAvailEndSeconds">delayAfterAvailEndSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.dynamicVariables">dynamicVariables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingRetrievalWindow">trafficShapingRetrievalWindow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTpsConfiguration">trafficShapingTpsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingType">trafficShapingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delayAfterAvailEndSeconds`<sup>Required</sup> <a name="delayAfterAvailEndSeconds" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.delayAfterAvailEndSeconds"></a>

```typescript
public readonly delayAfterAvailEndSeconds: number;
```

- *Type:* number

---

##### `dynamicVariables`<sup>Required</sup> <a name="dynamicVariables" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.dynamicVariables"></a>

```typescript
public readonly dynamicVariables: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `trafficShapingRetrievalWindow`<sup>Required</sup> <a name="trafficShapingRetrievalWindow" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingRetrievalWindow"></a>

```typescript
public readonly trafficShapingRetrievalWindow: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference</a>

---

##### `trafficShapingTpsConfiguration`<sup>Required</sup> <a name="trafficShapingTpsConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTpsConfiguration"></a>

```typescript
public readonly trafficShapingTpsConfiguration: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference</a>

---

##### `trafficShapingType`<sup>Required</sup> <a name="trafficShapingType" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingType"></a>

```typescript
public readonly trafficShapingType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds">retrievalWindowDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retrievalWindowDurationSeconds`<sup>Required</sup> <a name="retrievalWindowDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds"></a>

```typescript
public readonly retrievalWindowDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers">peakConcurrentUsers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps">peakTps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `peakConcurrentUsers`<sup>Required</sup> <a name="peakConcurrentUsers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers"></a>

```typescript
public readonly peakConcurrentUsers: number;
```

- *Type:* number

---

##### `peakTps`<sup>Required</sup> <a name="peakTps" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps"></a>

```typescript
public readonly peakTps: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a>

---


### DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.dynamicVariables">dynamicVariables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingRetrievalWindow">trafficShapingRetrievalWindow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTpsConfiguration">trafficShapingTpsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingType">trafficShapingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrieval">DataAwsccMediatailorPrefetchScheduleRetrieval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamicVariables`<sup>Required</sup> <a name="dynamicVariables" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.dynamicVariables"></a>

```typescript
public readonly dynamicVariables: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `trafficShapingRetrievalWindow`<sup>Required</sup> <a name="trafficShapingRetrievalWindow" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingRetrievalWindow"></a>

```typescript
public readonly trafficShapingRetrievalWindow: DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference</a>

---

##### `trafficShapingTpsConfiguration`<sup>Required</sup> <a name="trafficShapingTpsConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTpsConfiguration"></a>

```typescript
public readonly trafficShapingTpsConfiguration: DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference</a>

---

##### `trafficShapingType`<sup>Required</sup> <a name="trafficShapingType" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingType"></a>

```typescript
public readonly trafficShapingType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediatailorPrefetchScheduleRetrieval;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrieval">DataAwsccMediatailorPrefetchScheduleRetrieval</a>

---


### DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds">retrievalWindowDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retrievalWindowDurationSeconds`<sup>Required</sup> <a name="retrievalWindowDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds"></a>

```typescript
public readonly retrievalWindowDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a>

---


### DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers">peakConcurrentUsers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps">peakTps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `peakConcurrentUsers`<sup>Required</sup> <a name="peakConcurrentUsers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers"></a>

```typescript
public readonly peakConcurrentUsers: number;
```

- *Type:* number

---

##### `peakTps`<sup>Required</sup> <a name="peakTps" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps"></a>

```typescript
public readonly peakTps: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a>

---


### DataAwsccMediatailorPrefetchScheduleTagsList <a name="DataAwsccMediatailorPrefetchScheduleTagsList" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.get"></a>

```typescript
public get(index: number): DataAwsccMediatailorPrefetchScheduleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediatailorPrefetchScheduleTagsOutputReference <a name="DataAwsccMediatailorPrefetchScheduleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediatailorPrefetchSchedule } from '@cdktn/provider-awscc'

new dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTags">DataAwsccMediatailorPrefetchScheduleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediatailorPrefetchScheduleTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTags">DataAwsccMediatailorPrefetchScheduleTags</a>

---



