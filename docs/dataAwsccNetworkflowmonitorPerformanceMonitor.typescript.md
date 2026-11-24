# `dataAwsccNetworkflowmonitorPerformanceMonitor` Submodule <a name="`dataAwsccNetworkflowmonitorPerformanceMonitor` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkflowmonitorPerformanceMonitor <a name="DataAwsccNetworkflowmonitorPerformanceMonitor" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/networkflowmonitor_performance_monitor awscc_networkflowmonitor_performance_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.Initializer"></a>

```typescript
import { dataAwsccNetworkflowmonitorPerformanceMonitor } from '@cdktn/provider-awscc'

new dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor(scope: Construct, id: string, config: DataAwsccNetworkflowmonitorPerformanceMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig">DataAwsccNetworkflowmonitorPerformanceMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig">DataAwsccNetworkflowmonitorPerformanceMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkflowmonitorPerformanceMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.isConstruct"></a>

```typescript
import { dataAwsccNetworkflowmonitorPerformanceMonitor } from '@cdktn/provider-awscc'

dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.isTerraformElement"></a>

```typescript
import { dataAwsccNetworkflowmonitorPerformanceMonitor } from '@cdktn/provider-awscc'

dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.isTerraformDataSource"></a>

```typescript
import { dataAwsccNetworkflowmonitorPerformanceMonitor } from '@cdktn/provider-awscc'

dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.generateConfigForImport"></a>

```typescript
import { dataAwsccNetworkflowmonitorPerformanceMonitor } from '@cdktn/provider-awscc'

dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNetworkflowmonitorPerformanceMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworkflowmonitorPerformanceMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworkflowmonitorPerformanceMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/networkflowmonitor_performance_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkflowmonitorPerformanceMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.monitorName">monitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.monitorStatus">monitorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.monitorType">monitorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.scopeArn">scopeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList">DataAwsccNetworkflowmonitorPerformanceMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList">DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

---

##### `monitorStatus`<sup>Required</sup> <a name="monitorStatus" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.monitorStatus"></a>

```typescript
public readonly monitorStatus: string;
```

- *Type:* string

---

##### `monitorType`<sup>Required</sup> <a name="monitorType" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.monitorType"></a>

```typescript
public readonly monitorType: string;
```

- *Type:* string

---

##### `scopeArn`<sup>Required</sup> <a name="scopeArn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.scopeArn"></a>

```typescript
public readonly scopeArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.tags"></a>

```typescript
public readonly tags: DataAwsccNetworkflowmonitorPerformanceMonitorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList">DataAwsccNetworkflowmonitorPerformanceMonitorTagsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.targets"></a>

```typescript
public readonly targets: DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList">DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkflowmonitorPerformanceMonitorConfig <a name="DataAwsccNetworkflowmonitorPerformanceMonitorConfig" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.Initializer"></a>

```typescript
import { dataAwsccNetworkflowmonitorPerformanceMonitor } from '@cdktn/provider-awscc'

const dataAwsccNetworkflowmonitorPerformanceMonitorConfig: dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/networkflowmonitor_performance_monitor#id DataAwsccNetworkflowmonitorPerformanceMonitor#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkflowmonitorPerformanceMonitorTags <a name="DataAwsccNetworkflowmonitorPerformanceMonitorTags" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTags.Initializer"></a>

```typescript
import { dataAwsccNetworkflowmonitorPerformanceMonitor } from '@cdktn/provider-awscc'

const dataAwsccNetworkflowmonitorPerformanceMonitorTags: dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTags = { ... }
```


### DataAwsccNetworkflowmonitorPerformanceMonitorTargets <a name="DataAwsccNetworkflowmonitorPerformanceMonitorTargets" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargets.Initializer"></a>

```typescript
import { dataAwsccNetworkflowmonitorPerformanceMonitor } from '@cdktn/provider-awscc'

const dataAwsccNetworkflowmonitorPerformanceMonitorTargets: dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkflowmonitorPerformanceMonitorTagsList <a name="DataAwsccNetworkflowmonitorPerformanceMonitorTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.Initializer"></a>

```typescript
import { dataAwsccNetworkflowmonitorPerformanceMonitor } from '@cdktn/provider-awscc'

new dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference <a name="DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkflowmonitorPerformanceMonitor } from '@cdktn/provider-awscc'

new dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTags">DataAwsccNetworkflowmonitorPerformanceMonitorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkflowmonitorPerformanceMonitorTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTags">DataAwsccNetworkflowmonitorPerformanceMonitorTags</a>

---


### DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList <a name="DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.Initializer"></a>

```typescript
import { dataAwsccNetworkflowmonitorPerformanceMonitor } from '@cdktn/provider-awscc'

new dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference <a name="DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkflowmonitorPerformanceMonitor } from '@cdktn/provider-awscc'

new dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargets">DataAwsccNetworkflowmonitorPerformanceMonitorTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkflowmonitorPerformanceMonitorTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorPerformanceMonitor.DataAwsccNetworkflowmonitorPerformanceMonitorTargets">DataAwsccNetworkflowmonitorPerformanceMonitorTargets</a>

---



