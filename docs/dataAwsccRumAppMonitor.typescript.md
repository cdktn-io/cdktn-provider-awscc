# `dataAwsccRumAppMonitor` Submodule <a name="`dataAwsccRumAppMonitor` Submodule" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRumAppMonitor <a name="DataAwsccRumAppMonitor" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rum_app_monitor awscc_rum_app_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

new dataAwsccRumAppMonitor.DataAwsccRumAppMonitor(scope: Construct, id: string, config: DataAwsccRumAppMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig">DataAwsccRumAppMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig">DataAwsccRumAppMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRumAppMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isConstruct"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformElement"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformDataSource"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRumAppMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRumAppMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRumAppMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rum_app_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRumAppMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.appMonitorConfiguration">appMonitorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference">DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.appMonitorId">appMonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.customEvents">customEvents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference">DataAwsccRumAppMonitorCustomEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.cwLogEnabled">cwLogEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.deobfuscationConfiguration">deobfuscationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference">DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.domainList">domainList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference">DataAwsccRumAppMonitorResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList">DataAwsccRumAppMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `appMonitorConfiguration`<sup>Required</sup> <a name="appMonitorConfiguration" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.appMonitorConfiguration"></a>

```typescript
public readonly appMonitorConfiguration: DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference">DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference</a>

---

##### `appMonitorId`<sup>Required</sup> <a name="appMonitorId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.appMonitorId"></a>

```typescript
public readonly appMonitorId: string;
```

- *Type:* string

---

##### `customEvents`<sup>Required</sup> <a name="customEvents" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.customEvents"></a>

```typescript
public readonly customEvents: DataAwsccRumAppMonitorCustomEventsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference">DataAwsccRumAppMonitorCustomEventsOutputReference</a>

---

##### `cwLogEnabled`<sup>Required</sup> <a name="cwLogEnabled" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.cwLogEnabled"></a>

```typescript
public readonly cwLogEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `deobfuscationConfiguration`<sup>Required</sup> <a name="deobfuscationConfiguration" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.deobfuscationConfiguration"></a>

```typescript
public readonly deobfuscationConfiguration: DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference">DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `domainList`<sup>Required</sup> <a name="domainList" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.domainList"></a>

```typescript
public readonly domainList: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `resourcePolicy`<sup>Required</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.resourcePolicy"></a>

```typescript
public readonly resourcePolicy: DataAwsccRumAppMonitorResourcePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference">DataAwsccRumAppMonitorResourcePolicyOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.tags"></a>

```typescript
public readonly tags: DataAwsccRumAppMonitorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList">DataAwsccRumAppMonitorTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRumAppMonitorAppMonitorConfiguration <a name="DataAwsccRumAppMonitorAppMonitorConfiguration" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfiguration.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

const dataAwsccRumAppMonitorAppMonitorConfiguration: dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfiguration = { ... }
```


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

const dataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations: dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations = { ... }
```


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

const dataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions: dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions = { ... }
```


### DataAwsccRumAppMonitorConfig <a name="DataAwsccRumAppMonitorConfig" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

const dataAwsccRumAppMonitorConfig: dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/rum_app_monitor#id DataAwsccRumAppMonitor#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRumAppMonitorCustomEvents <a name="DataAwsccRumAppMonitorCustomEvents" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEvents.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

const dataAwsccRumAppMonitorCustomEvents: dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEvents = { ... }
```


### DataAwsccRumAppMonitorDeobfuscationConfiguration <a name="DataAwsccRumAppMonitorDeobfuscationConfiguration" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfiguration.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

const dataAwsccRumAppMonitorDeobfuscationConfiguration: dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfiguration = { ... }
```


### DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps <a name="DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

const dataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps: dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps = { ... }
```


### DataAwsccRumAppMonitorResourcePolicy <a name="DataAwsccRumAppMonitorResourcePolicy" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicy.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

const dataAwsccRumAppMonitorResourcePolicy: dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicy = { ... }
```


### DataAwsccRumAppMonitorTags <a name="DataAwsccRumAppMonitorTags" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTags.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

const dataAwsccRumAppMonitorTags: dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

new dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.get"></a>

```typescript
public get(index: number): DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

new dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get"></a>

```typescript
public get(index: number): DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

new dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeys">dimensionKeys</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPattern">eventPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabel">unitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKey">valueKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionKeys`<sup>Required</sup> <a name="dimensionKeys" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeys"></a>

```typescript
public readonly dimensionKeys: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `unitLabel`<sup>Required</sup> <a name="unitLabel" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabel"></a>

```typescript
public readonly unitLabel: string;
```

- *Type:* string

---

##### `valueKey`<sup>Required</sup> <a name="valueKey" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKey"></a>

```typescript
public readonly valueKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>

---


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

new dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitions">metricDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `metricDefinitions`<sup>Required</sup> <a name="metricDefinitions" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitions"></a>

```typescript
public readonly metricDefinitions: DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations</a>

---


### DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference <a name="DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

new dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies">allowCookies</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRay">enableXRay</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages">excludedPages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages">favoritePages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn">guestRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages">includedPages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinations">metricDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate">sessionSampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries">telemetries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfiguration">DataAwsccRumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowCookies`<sup>Required</sup> <a name="allowCookies" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies"></a>

```typescript
public readonly allowCookies: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableXRay`<sup>Required</sup> <a name="enableXRay" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRay"></a>

```typescript
public readonly enableXRay: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `excludedPages`<sup>Required</sup> <a name="excludedPages" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages"></a>

```typescript
public readonly excludedPages: string[];
```

- *Type:* string[]

---

##### `favoritePages`<sup>Required</sup> <a name="favoritePages" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages"></a>

```typescript
public readonly favoritePages: string[];
```

- *Type:* string[]

---

##### `guestRoleArn`<sup>Required</sup> <a name="guestRoleArn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn"></a>

```typescript
public readonly guestRoleArn: string;
```

- *Type:* string

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `includedPages`<sup>Required</sup> <a name="includedPages" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages"></a>

```typescript
public readonly includedPages: string[];
```

- *Type:* string[]

---

##### `metricDestinations`<sup>Required</sup> <a name="metricDestinations" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinations"></a>

```typescript
public readonly metricDestinations: DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList</a>

---

##### `sessionSampleRate`<sup>Required</sup> <a name="sessionSampleRate" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate"></a>

```typescript
public readonly sessionSampleRate: number;
```

- *Type:* number

---

##### `telemetries`<sup>Required</sup> <a name="telemetries" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries"></a>

```typescript
public readonly telemetries: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRumAppMonitorAppMonitorConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfiguration">DataAwsccRumAppMonitorAppMonitorConfiguration</a>

---


### DataAwsccRumAppMonitorCustomEventsOutputReference <a name="DataAwsccRumAppMonitorCustomEventsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

new dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEvents">DataAwsccRumAppMonitorCustomEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRumAppMonitorCustomEvents;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEvents">DataAwsccRumAppMonitorCustomEvents</a>

---


### DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference <a name="DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

new dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

---


### DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference <a name="DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

new dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMaps">javaScriptSourceMaps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference">DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfiguration">DataAwsccRumAppMonitorDeobfuscationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `javaScriptSourceMaps`<sup>Required</sup> <a name="javaScriptSourceMaps" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMaps"></a>

```typescript
public readonly javaScriptSourceMaps: DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference">DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRumAppMonitorDeobfuscationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfiguration">DataAwsccRumAppMonitorDeobfuscationConfiguration</a>

---


### DataAwsccRumAppMonitorResourcePolicyOutputReference <a name="DataAwsccRumAppMonitorResourcePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

new dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.policyRevisionId">policyRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicy">DataAwsccRumAppMonitorResourcePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `policyRevisionId`<sup>Required</sup> <a name="policyRevisionId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.policyRevisionId"></a>

```typescript
public readonly policyRevisionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRumAppMonitorResourcePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicy">DataAwsccRumAppMonitorResourcePolicy</a>

---


### DataAwsccRumAppMonitorTagsList <a name="DataAwsccRumAppMonitorTagsList" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

new dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.get"></a>

```typescript
public get(index: number): DataAwsccRumAppMonitorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRumAppMonitorTagsOutputReference <a name="DataAwsccRumAppMonitorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRumAppMonitor } from '@cdktn/provider-awscc'

new dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTags">DataAwsccRumAppMonitorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRumAppMonitorTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTags">DataAwsccRumAppMonitorTags</a>

---



