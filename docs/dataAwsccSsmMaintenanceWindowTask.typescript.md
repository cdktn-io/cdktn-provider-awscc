# `dataAwsccSsmMaintenanceWindowTask` Submodule <a name="`dataAwsccSsmMaintenanceWindowTask` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmMaintenanceWindowTask <a name="DataAwsccSsmMaintenanceWindowTask" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssm_maintenance_window_task awscc_ssm_maintenance_window_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

new dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask(scope: Construct, id: string, config: DataAwsccSsmMaintenanceWindowTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig">DataAwsccSsmMaintenanceWindowTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig">DataAwsccSsmMaintenanceWindowTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmMaintenanceWindowTask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isConstruct"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformElement"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformDataSource"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSsmMaintenanceWindowTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSsmMaintenanceWindowTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSsmMaintenanceWindowTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssm_maintenance_window_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmMaintenanceWindowTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.cutoffBehavior">cutoffBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.loggingInfo">loggingInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference">DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.maxConcurrency">maxConcurrency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.maxErrors">maxErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList">DataAwsccSsmMaintenanceWindowTaskTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskArn">taskArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskInvocationParameters">taskInvocationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskParameters">taskParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskType">taskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.windowId">windowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.windowTaskId">windowTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `cutoffBehavior`<sup>Required</sup> <a name="cutoffBehavior" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.cutoffBehavior"></a>

```typescript
public readonly cutoffBehavior: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `loggingInfo`<sup>Required</sup> <a name="loggingInfo" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.loggingInfo"></a>

```typescript
public readonly loggingInfo: DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference">DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference</a>

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: string;
```

- *Type:* string

---

##### `maxErrors`<sup>Required</sup> <a name="maxErrors" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.maxErrors"></a>

```typescript
public readonly maxErrors: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.targets"></a>

```typescript
public readonly targets: DataAwsccSsmMaintenanceWindowTaskTargetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList">DataAwsccSsmMaintenanceWindowTaskTargetsList</a>

---

##### `taskArn`<sup>Required</sup> <a name="taskArn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskArn"></a>

```typescript
public readonly taskArn: string;
```

- *Type:* string

---

##### `taskInvocationParameters`<sup>Required</sup> <a name="taskInvocationParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskInvocationParameters"></a>

```typescript
public readonly taskInvocationParameters: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference</a>

---

##### `taskParameters`<sup>Required</sup> <a name="taskParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskParameters"></a>

```typescript
public readonly taskParameters: string;
```

- *Type:* string

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

---

##### `windowId`<sup>Required</sup> <a name="windowId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.windowId"></a>

```typescript
public readonly windowId: string;
```

- *Type:* string

---

##### `windowTaskId`<sup>Required</sup> <a name="windowTaskId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.windowTaskId"></a>

```typescript
public readonly windowTaskId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmMaintenanceWindowTaskConfig <a name="DataAwsccSsmMaintenanceWindowTaskConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

const dataAwsccSsmMaintenanceWindowTaskConfig: dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssm_maintenance_window_task#id DataAwsccSsmMaintenanceWindowTask#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmMaintenanceWindowTaskLoggingInfo <a name="DataAwsccSsmMaintenanceWindowTaskLoggingInfo" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfo.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

const dataAwsccSsmMaintenanceWindowTaskLoggingInfo: dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfo = { ... }
```


### DataAwsccSsmMaintenanceWindowTaskTargets <a name="DataAwsccSsmMaintenanceWindowTaskTargets" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargets.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

const dataAwsccSsmMaintenanceWindowTaskTargets: dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargets = { ... }
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

const dataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters: dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters = { ... }
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

const dataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters: dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters = { ... }
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

const dataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters: dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters = { ... }
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

const dataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters: dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters = { ... }
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

const dataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig: dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig = { ... }
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

const dataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig: dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig = { ... }
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

const dataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters: dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

new dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Prefix">s3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfo">DataAwsccSsmMaintenanceWindowTaskLoggingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Prefix`<sup>Required</sup> <a name="s3Prefix" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Prefix"></a>

```typescript
public readonly s3Prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmMaintenanceWindowTaskLoggingInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfo">DataAwsccSsmMaintenanceWindowTaskLoggingInfo</a>

---


### DataAwsccSsmMaintenanceWindowTaskTargetsList <a name="DataAwsccSsmMaintenanceWindowTaskTargetsList" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

new dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.get"></a>

```typescript
public get(index: number): DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

new dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargets">DataAwsccSsmMaintenanceWindowTaskTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmMaintenanceWindowTaskTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargets">DataAwsccSsmMaintenanceWindowTaskTargets</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

new dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.documentVersion">documentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `documentVersion`<sup>Required</sup> <a name="documentVersion" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.documentVersion"></a>

```typescript
public readonly documentVersion: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

new dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.clientContext">clientContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.qualifier">qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientContext`<sup>Required</sup> <a name="clientContext" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.clientContext"></a>

```typescript
public readonly clientContext: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

new dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchLogGroupName">cloudwatchLogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchOutputEnabled">cloudwatchOutputEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupName`<sup>Required</sup> <a name="cloudwatchLogGroupName" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchLogGroupName"></a>

```typescript
public readonly cloudwatchLogGroupName: string;
```

- *Type:* string

---

##### `cloudwatchOutputEnabled`<sup>Required</sup> <a name="cloudwatchOutputEnabled" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchOutputEnabled"></a>

```typescript
public readonly cloudwatchOutputEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

new dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationArn">notificationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationEvents">notificationEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationType">notificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationArn`<sup>Required</sup> <a name="notificationArn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationArn"></a>

```typescript
public readonly notificationArn: string;
```

- *Type:* string

---

##### `notificationEvents`<sup>Required</sup> <a name="notificationEvents" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationEvents"></a>

```typescript
public readonly notificationEvents: string[];
```

- *Type:* string[]

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

new dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.cloudwatchOutputConfig">cloudwatchOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHash">documentHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHashType">documentHashType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentVersion">documentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3BucketName">outputS3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3KeyPrefix">outputS3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchOutputConfig`<sup>Required</sup> <a name="cloudwatchOutputConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.cloudwatchOutputConfig"></a>

```typescript
public readonly cloudwatchOutputConfig: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `documentHash`<sup>Required</sup> <a name="documentHash" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHash"></a>

```typescript
public readonly documentHash: string;
```

- *Type:* string

---

##### `documentHashType`<sup>Required</sup> <a name="documentHashType" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHashType"></a>

```typescript
public readonly documentHashType: string;
```

- *Type:* string

---

##### `documentVersion`<sup>Required</sup> <a name="documentVersion" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentVersion"></a>

```typescript
public readonly documentVersion: string;
```

- *Type:* string

---

##### `notificationConfig`<sup>Required</sup> <a name="notificationConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference</a>

---

##### `outputS3BucketName`<sup>Required</sup> <a name="outputS3BucketName" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3BucketName"></a>

```typescript
public readonly outputS3BucketName: string;
```

- *Type:* string

---

##### `outputS3KeyPrefix`<sup>Required</sup> <a name="outputS3KeyPrefix" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3KeyPrefix"></a>

```typescript
public readonly outputS3KeyPrefix: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

new dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindowTask } from '@cdktn/provider-awscc'

new dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowAutomationParameters">maintenanceWindowAutomationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowLambdaParameters">maintenanceWindowLambdaParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowRunCommandParameters">maintenanceWindowRunCommandParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowStepFunctionsParameters">maintenanceWindowStepFunctionsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maintenanceWindowAutomationParameters`<sup>Required</sup> <a name="maintenanceWindowAutomationParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowAutomationParameters"></a>

```typescript
public readonly maintenanceWindowAutomationParameters: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference</a>

---

##### `maintenanceWindowLambdaParameters`<sup>Required</sup> <a name="maintenanceWindowLambdaParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowLambdaParameters"></a>

```typescript
public readonly maintenanceWindowLambdaParameters: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference</a>

---

##### `maintenanceWindowRunCommandParameters`<sup>Required</sup> <a name="maintenanceWindowRunCommandParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowRunCommandParameters"></a>

```typescript
public readonly maintenanceWindowRunCommandParameters: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference</a>

---

##### `maintenanceWindowStepFunctionsParameters`<sup>Required</sup> <a name="maintenanceWindowStepFunctionsParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowStepFunctionsParameters"></a>

```typescript
public readonly maintenanceWindowStepFunctionsParameters: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters</a>

---



