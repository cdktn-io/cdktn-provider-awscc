# `dataAwsccCeAnomalyMonitor` Submodule <a name="`dataAwsccCeAnomalyMonitor` Submodule" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCeAnomalyMonitor <a name="DataAwsccCeAnomalyMonitor" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ce_anomaly_monitor awscc_ce_anomaly_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.Initializer"></a>

```typescript
import { dataAwsccCeAnomalyMonitor } from '@cdktn/provider-awscc'

new dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor(scope: Construct, id: string, config: DataAwsccCeAnomalyMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig">DataAwsccCeAnomalyMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig">DataAwsccCeAnomalyMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCeAnomalyMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.isConstruct"></a>

```typescript
import { dataAwsccCeAnomalyMonitor } from '@cdktn/provider-awscc'

dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.isTerraformElement"></a>

```typescript
import { dataAwsccCeAnomalyMonitor } from '@cdktn/provider-awscc'

dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.isTerraformDataSource"></a>

```typescript
import { dataAwsccCeAnomalyMonitor } from '@cdktn/provider-awscc'

dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.generateConfigForImport"></a>

```typescript
import { dataAwsccCeAnomalyMonitor } from '@cdktn/provider-awscc'

dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCeAnomalyMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCeAnomalyMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCeAnomalyMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ce_anomaly_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCeAnomalyMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.dimensionalValueCount">dimensionalValueCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.lastEvaluatedDate">lastEvaluatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.monitorArn">monitorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.monitorDimension">monitorDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.monitorName">monitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.monitorSpecification">monitorSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.monitorType">monitorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.resourceTags">resourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList">DataAwsccCeAnomalyMonitorResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `dimensionalValueCount`<sup>Required</sup> <a name="dimensionalValueCount" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.dimensionalValueCount"></a>

```typescript
public readonly dimensionalValueCount: number;
```

- *Type:* number

---

##### `lastEvaluatedDate`<sup>Required</sup> <a name="lastEvaluatedDate" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.lastEvaluatedDate"></a>

```typescript
public readonly lastEvaluatedDate: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `monitorArn`<sup>Required</sup> <a name="monitorArn" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.monitorArn"></a>

```typescript
public readonly monitorArn: string;
```

- *Type:* string

---

##### `monitorDimension`<sup>Required</sup> <a name="monitorDimension" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.monitorDimension"></a>

```typescript
public readonly monitorDimension: string;
```

- *Type:* string

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

---

##### `monitorSpecification`<sup>Required</sup> <a name="monitorSpecification" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.monitorSpecification"></a>

```typescript
public readonly monitorSpecification: string;
```

- *Type:* string

---

##### `monitorType`<sup>Required</sup> <a name="monitorType" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.monitorType"></a>

```typescript
public readonly monitorType: string;
```

- *Type:* string

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.resourceTags"></a>

```typescript
public readonly resourceTags: DataAwsccCeAnomalyMonitorResourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList">DataAwsccCeAnomalyMonitorResourceTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCeAnomalyMonitorConfig <a name="DataAwsccCeAnomalyMonitorConfig" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.Initializer"></a>

```typescript
import { dataAwsccCeAnomalyMonitor } from '@cdktn/provider-awscc'

const dataAwsccCeAnomalyMonitorConfig: dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ce_anomaly_monitor#id DataAwsccCeAnomalyMonitor#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCeAnomalyMonitorResourceTags <a name="DataAwsccCeAnomalyMonitorResourceTags" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTags.Initializer"></a>

```typescript
import { dataAwsccCeAnomalyMonitor } from '@cdktn/provider-awscc'

const dataAwsccCeAnomalyMonitorResourceTags: dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCeAnomalyMonitorResourceTagsList <a name="DataAwsccCeAnomalyMonitorResourceTagsList" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.Initializer"></a>

```typescript
import { dataAwsccCeAnomalyMonitor } from '@cdktn/provider-awscc'

new dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCeAnomalyMonitorResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCeAnomalyMonitorResourceTagsOutputReference <a name="DataAwsccCeAnomalyMonitorResourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCeAnomalyMonitor } from '@cdktn/provider-awscc'

new dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTags">DataAwsccCeAnomalyMonitorResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCeAnomalyMonitorResourceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCeAnomalyMonitor.DataAwsccCeAnomalyMonitorResourceTags">DataAwsccCeAnomalyMonitorResourceTags</a>

---



