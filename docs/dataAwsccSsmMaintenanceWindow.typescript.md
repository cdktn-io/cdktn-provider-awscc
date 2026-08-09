# `dataAwsccSsmMaintenanceWindow` Submodule <a name="`dataAwsccSsmMaintenanceWindow` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmMaintenanceWindow <a name="DataAwsccSsmMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ssm_maintenance_window awscc_ssm_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindow } from '@cdktn/provider-awscc'

new dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow(scope: Construct, id: string, config: DataAwsccSsmMaintenanceWindowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig">DataAwsccSsmMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig">DataAwsccSsmMaintenanceWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmMaintenanceWindow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isConstruct"></a>

```typescript
import { dataAwsccSsmMaintenanceWindow } from '@cdktn/provider-awscc'

dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isTerraformElement"></a>

```typescript
import { dataAwsccSsmMaintenanceWindow } from '@cdktn/provider-awscc'

dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isTerraformDataSource"></a>

```typescript
import { dataAwsccSsmMaintenanceWindow } from '@cdktn/provider-awscc'

dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.generateConfigForImport"></a>

```typescript
import { dataAwsccSsmMaintenanceWindow } from '@cdktn/provider-awscc'

dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSsmMaintenanceWindow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSsmMaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSsmMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ssm_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.allowUnassociatedTargets">allowUnassociatedTargets</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.cutoff">cutoff</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.scheduleOffset">scheduleOffset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.scheduleTimezone">scheduleTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList">DataAwsccSsmMaintenanceWindowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.windowId">windowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `allowUnassociatedTargets`<sup>Required</sup> <a name="allowUnassociatedTargets" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.allowUnassociatedTargets"></a>

```typescript
public readonly allowUnassociatedTargets: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `cutoff`<sup>Required</sup> <a name="cutoff" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.cutoff"></a>

```typescript
public readonly cutoff: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `scheduleOffset`<sup>Required</sup> <a name="scheduleOffset" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.scheduleOffset"></a>

```typescript
public readonly scheduleOffset: number;
```

- *Type:* number

---

##### `scheduleTimezone`<sup>Required</sup> <a name="scheduleTimezone" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.scheduleTimezone"></a>

```typescript
public readonly scheduleTimezone: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.tags"></a>

```typescript
public readonly tags: DataAwsccSsmMaintenanceWindowTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList">DataAwsccSsmMaintenanceWindowTagsList</a>

---

##### `windowId`<sup>Required</sup> <a name="windowId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.windowId"></a>

```typescript
public readonly windowId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmMaintenanceWindowConfig <a name="DataAwsccSsmMaintenanceWindowConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindow } from '@cdktn/provider-awscc'

const dataAwsccSsmMaintenanceWindowConfig: dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ssm_maintenance_window#id DataAwsccSsmMaintenanceWindow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmMaintenanceWindowTags <a name="DataAwsccSsmMaintenanceWindowTags" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTags.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindow } from '@cdktn/provider-awscc'

const dataAwsccSsmMaintenanceWindowTags: dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmMaintenanceWindowTagsList <a name="DataAwsccSsmMaintenanceWindowTagsList" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindow } from '@cdktn/provider-awscc'

new dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSsmMaintenanceWindowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSsmMaintenanceWindowTagsOutputReference <a name="DataAwsccSsmMaintenanceWindowTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmMaintenanceWindow } from '@cdktn/provider-awscc'

new dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTags">DataAwsccSsmMaintenanceWindowTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmMaintenanceWindowTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTags">DataAwsccSsmMaintenanceWindowTags</a>

---



