# `dataAwsccInternetmonitorMonitor` Submodule <a name="`dataAwsccInternetmonitorMonitor` Submodule" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInternetmonitorMonitor <a name="DataAwsccInternetmonitorMonitor" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/internetmonitor_monitor awscc_internetmonitor_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

new dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor(scope: Construct, id: string, config: DataAwsccInternetmonitorMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig">DataAwsccInternetmonitorMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig">DataAwsccInternetmonitorMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInternetmonitorMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isConstruct"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isTerraformElement"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isTerraformDataSource"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.generateConfigForImport"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccInternetmonitorMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccInternetmonitorMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccInternetmonitorMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/internetmonitor_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInternetmonitorMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.healthEventsConfig">healthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference">DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.includeLinkedAccounts">includeLinkedAccounts</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.internetMeasurementsLogDelivery">internetMeasurementsLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.linkedAccountId">linkedAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.maxCityNetworksToMonitor">maxCityNetworksToMonitor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.monitorArn">monitorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.monitorName">monitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.processingStatus">processingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.processingStatusInfo">processingStatusInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.resourcesToAdd">resourcesToAdd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.resourcesToRemove">resourcesToRemove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList">DataAwsccInternetmonitorMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.trafficPercentageToMonitor">trafficPercentageToMonitor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `healthEventsConfig`<sup>Required</sup> <a name="healthEventsConfig" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.healthEventsConfig"></a>

```typescript
public readonly healthEventsConfig: DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference">DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference</a>

---

##### `includeLinkedAccounts`<sup>Required</sup> <a name="includeLinkedAccounts" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.includeLinkedAccounts"></a>

```typescript
public readonly includeLinkedAccounts: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internetMeasurementsLogDelivery`<sup>Required</sup> <a name="internetMeasurementsLogDelivery" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.internetMeasurementsLogDelivery"></a>

```typescript
public readonly internetMeasurementsLogDelivery: DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a>

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.linkedAccountId"></a>

```typescript
public readonly linkedAccountId: string;
```

- *Type:* string

---

##### `maxCityNetworksToMonitor`<sup>Required</sup> <a name="maxCityNetworksToMonitor" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.maxCityNetworksToMonitor"></a>

```typescript
public readonly maxCityNetworksToMonitor: number;
```

- *Type:* number

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `monitorArn`<sup>Required</sup> <a name="monitorArn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.monitorArn"></a>

```typescript
public readonly monitorArn: string;
```

- *Type:* string

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

---

##### `processingStatus`<sup>Required</sup> <a name="processingStatus" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.processingStatus"></a>

```typescript
public readonly processingStatus: string;
```

- *Type:* string

---

##### `processingStatusInfo`<sup>Required</sup> <a name="processingStatusInfo" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.processingStatusInfo"></a>

```typescript
public readonly processingStatusInfo: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `resourcesToAdd`<sup>Required</sup> <a name="resourcesToAdd" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.resourcesToAdd"></a>

```typescript
public readonly resourcesToAdd: string[];
```

- *Type:* string[]

---

##### `resourcesToRemove`<sup>Required</sup> <a name="resourcesToRemove" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.resourcesToRemove"></a>

```typescript
public readonly resourcesToRemove: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.tags"></a>

```typescript
public readonly tags: DataAwsccInternetmonitorMonitorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList">DataAwsccInternetmonitorMonitorTagsList</a>

---

##### `trafficPercentageToMonitor`<sup>Required</sup> <a name="trafficPercentageToMonitor" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.trafficPercentageToMonitor"></a>

```typescript
public readonly trafficPercentageToMonitor: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInternetmonitorMonitorConfig <a name="DataAwsccInternetmonitorMonitorConfig" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

const dataAwsccInternetmonitorMonitorConfig: dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/internetmonitor_monitor#id DataAwsccInternetmonitorMonitor#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInternetmonitorMonitorHealthEventsConfig <a name="DataAwsccInternetmonitorMonitorHealthEventsConfig" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfig.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

const dataAwsccInternetmonitorMonitorHealthEventsConfig: dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfig = { ... }
```


### DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig <a name="DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

const dataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig: dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig = { ... }
```


### DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig <a name="DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

const dataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig: dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig = { ... }
```


### DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery <a name="DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

const dataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery: dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery = { ... }
```


### DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config <a name="DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

const dataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config: dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config = { ... }
```


### DataAwsccInternetmonitorMonitorTags <a name="DataAwsccInternetmonitorMonitorTags" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTags.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

const dataAwsccInternetmonitorMonitorTags: dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference <a name="DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

new dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThreshold">healthScoreThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpact">minTrafficImpact</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthScoreThreshold`<sup>Required</sup> <a name="healthScoreThreshold" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThreshold"></a>

```typescript
public readonly healthScoreThreshold: number;
```

- *Type:* number

---

##### `minTrafficImpact`<sup>Required</sup> <a name="minTrafficImpact" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpact"></a>

```typescript
public readonly minTrafficImpact: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a>

---


### DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference <a name="DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

new dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfig">availabilityLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference">DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold">availabilityScoreThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfig">performanceLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference">DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold">performanceScoreThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfig">DataAwsccInternetmonitorMonitorHealthEventsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityLocalHealthEventsConfig`<sup>Required</sup> <a name="availabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfig"></a>

```typescript
public readonly availabilityLocalHealthEventsConfig: DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference">DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference</a>

---

##### `availabilityScoreThreshold`<sup>Required</sup> <a name="availabilityScoreThreshold" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold"></a>

```typescript
public readonly availabilityScoreThreshold: number;
```

- *Type:* number

---

##### `performanceLocalHealthEventsConfig`<sup>Required</sup> <a name="performanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfig"></a>

```typescript
public readonly performanceLocalHealthEventsConfig: DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference">DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference</a>

---

##### `performanceScoreThreshold`<sup>Required</sup> <a name="performanceScoreThreshold" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold"></a>

```typescript
public readonly performanceScoreThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInternetmonitorMonitorHealthEventsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfig">DataAwsccInternetmonitorMonitorHealthEventsConfig</a>

---


### DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference <a name="DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

new dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThreshold">healthScoreThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpact">minTrafficImpact</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthScoreThreshold`<sup>Required</sup> <a name="healthScoreThreshold" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThreshold"></a>

```typescript
public readonly healthScoreThreshold: number;
```

- *Type:* number

---

##### `minTrafficImpact`<sup>Required</sup> <a name="minTrafficImpact" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpact"></a>

```typescript
public readonly minTrafficImpact: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a>

---


### DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference <a name="DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

new dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config">s3Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Config`<sup>Required</sup> <a name="s3Config" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config"></a>

```typescript
public readonly s3Config: DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---


### DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference <a name="DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

new dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus">logDeliveryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `logDeliveryStatus`<sup>Required</sup> <a name="logDeliveryStatus" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus"></a>

```typescript
public readonly logDeliveryStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---


### DataAwsccInternetmonitorMonitorTagsList <a name="DataAwsccInternetmonitorMonitorTagsList" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

new dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.get"></a>

```typescript
public get(index: number): DataAwsccInternetmonitorMonitorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccInternetmonitorMonitorTagsOutputReference <a name="DataAwsccInternetmonitorMonitorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccInternetmonitorMonitor } from '@cdktn/provider-awscc'

new dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTags">DataAwsccInternetmonitorMonitorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInternetmonitorMonitorTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTags">DataAwsccInternetmonitorMonitorTags</a>

---



