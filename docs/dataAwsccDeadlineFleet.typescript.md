# `dataAwsccDeadlineFleet` Submodule <a name="`dataAwsccDeadlineFleet` Submodule" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDeadlineFleet <a name="DataAwsccDeadlineFleet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/deadline_fleet awscc_deadline_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleet(scope: Construct, id: string, config: DataAwsccDeadlineFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig">DataAwsccDeadlineFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig">DataAwsccDeadlineFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDeadlineFleet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isConstruct"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformElement"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformDataSource"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDeadlineFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDeadlineFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDeadlineFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/deadline_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDeadlineFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference">DataAwsccDeadlineFleetCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.farmId">farmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.hostConfiguration">hostConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference">DataAwsccDeadlineFleetHostConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.maxWorkerCount">maxWorkerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.minWorkerCount">minWorkerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList">DataAwsccDeadlineFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.workerCount">workerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.capabilities"></a>

```typescript
public readonly capabilities: DataAwsccDeadlineFleetCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference">DataAwsccDeadlineFleetCapabilitiesOutputReference</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.configuration"></a>

```typescript
public readonly configuration: DataAwsccDeadlineFleetConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `hostConfiguration`<sup>Required</sup> <a name="hostConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.hostConfiguration"></a>

```typescript
public readonly hostConfiguration: DataAwsccDeadlineFleetHostConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference">DataAwsccDeadlineFleetHostConfigurationOutputReference</a>

---

##### `maxWorkerCount`<sup>Required</sup> <a name="maxWorkerCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.maxWorkerCount"></a>

```typescript
public readonly maxWorkerCount: number;
```

- *Type:* number

---

##### `minWorkerCount`<sup>Required</sup> <a name="minWorkerCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.minWorkerCount"></a>

```typescript
public readonly minWorkerCount: number;
```

- *Type:* number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.tags"></a>

```typescript
public readonly tags: DataAwsccDeadlineFleetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList">DataAwsccDeadlineFleetTagsList</a>

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.workerCount"></a>

```typescript
public readonly workerCount: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDeadlineFleetCapabilities <a name="DataAwsccDeadlineFleetCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilities.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetCapabilities: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilities = { ... }
```


### DataAwsccDeadlineFleetCapabilitiesAmounts <a name="DataAwsccDeadlineFleetCapabilitiesAmounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmounts.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetCapabilitiesAmounts: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmounts = { ... }
```


### DataAwsccDeadlineFleetCapabilitiesAttributes <a name="DataAwsccDeadlineFleetCapabilitiesAttributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributes.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetCapabilitiesAttributes: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributes = { ... }
```


### DataAwsccDeadlineFleetConfig <a name="DataAwsccDeadlineFleetConfig" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfig: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/deadline_fleet#id DataAwsccDeadlineFleet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDeadlineFleetConfiguration <a name="DataAwsccDeadlineFleetConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfiguration.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfiguration: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfiguration = { ... }
```


### DataAwsccDeadlineFleetConfigurationCustomerManaged <a name="DataAwsccDeadlineFleetConfigurationCustomerManaged" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManaged.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationCustomerManaged: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManaged = { ... }
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration = { ... }
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities = { ... }
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount = { ... }
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB = { ... }
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts = { ... }
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes = { ... }
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB = { ... }
```


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount = { ... }
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2 <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationServiceManagedEc2: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2 = { ... }
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration = { ... }
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities = { ... }
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities = { ... }
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount = { ... }
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections = { ... }
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts = { ... }
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes = { ... }
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB = { ... }
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume = { ... }
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount = { ... }
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions = { ... }
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration = { ... }
```


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration = { ... }
```


### DataAwsccDeadlineFleetHostConfiguration <a name="DataAwsccDeadlineFleetHostConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfiguration.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetHostConfiguration: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfiguration = { ... }
```


### DataAwsccDeadlineFleetTags <a name="DataAwsccDeadlineFleetTags" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTags.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

const dataAwsccDeadlineFleetTags: dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDeadlineFleetCapabilitiesAmountsList <a name="DataAwsccDeadlineFleetCapabilitiesAmountsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.get"></a>

```typescript
public get(index: number): DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference <a name="DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmounts">DataAwsccDeadlineFleetCapabilitiesAmounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetCapabilitiesAmounts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmounts">DataAwsccDeadlineFleetCapabilitiesAmounts</a>

---


### DataAwsccDeadlineFleetCapabilitiesAttributesList <a name="DataAwsccDeadlineFleetCapabilitiesAttributesList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.get"></a>

```typescript
public get(index: number): DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference <a name="DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributes">DataAwsccDeadlineFleetCapabilitiesAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetCapabilitiesAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributes">DataAwsccDeadlineFleetCapabilitiesAttributes</a>

---


### DataAwsccDeadlineFleetCapabilitiesOutputReference <a name="DataAwsccDeadlineFleetCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.amounts">amounts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList">DataAwsccDeadlineFleetCapabilitiesAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList">DataAwsccDeadlineFleetCapabilitiesAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilities">DataAwsccDeadlineFleetCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amounts`<sup>Required</sup> <a name="amounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.amounts"></a>

```typescript
public readonly amounts: DataAwsccDeadlineFleetCapabilitiesAmountsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAmountsList">DataAwsccDeadlineFleetCapabilitiesAmountsList</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.attributes"></a>

```typescript
public readonly attributes: DataAwsccDeadlineFleetCapabilitiesAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesAttributesList">DataAwsccDeadlineFleetCapabilitiesAttributesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetCapabilities">DataAwsccDeadlineFleetCapabilities</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute">scaleOutWorkersPerMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.standbyWorkerCount">standbyWorkerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds">workerIdleDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleOutWorkersPerMinute`<sup>Required</sup> <a name="scaleOutWorkersPerMinute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute"></a>

```typescript
public readonly scaleOutWorkersPerMinute: number;
```

- *Type:* number

---

##### `standbyWorkerCount`<sup>Required</sup> <a name="standbyWorkerCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.standbyWorkerCount"></a>

```typescript
public readonly standbyWorkerCount: number;
```

- *Type:* number

---

##### `workerIdleDurationSeconds`<sup>Required</sup> <a name="workerIdleDurationSeconds" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds"></a>

```typescript
public readonly workerIdleDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.autoScalingConfiguration">autoScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.storageProfileId">storageProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.tagPropagationMode">tagPropagationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.workerCapabilities">workerCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManaged">DataAwsccDeadlineFleetConfigurationCustomerManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoScalingConfiguration`<sup>Required</sup> <a name="autoScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.autoScalingConfiguration"></a>

```typescript
public readonly autoScalingConfiguration: DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `storageProfileId`<sup>Required</sup> <a name="storageProfileId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.storageProfileId"></a>

```typescript
public readonly storageProfileId: string;
```

- *Type:* string

---

##### `tagPropagationMode`<sup>Required</sup> <a name="tagPropagationMode" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.tagPropagationMode"></a>

```typescript
public readonly tagPropagationMode: string;
```

- *Type:* string

---

##### `workerCapabilities`<sup>Required</sup> <a name="workerCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.workerCapabilities"></a>

```typescript
public readonly workerCapabilities: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationCustomerManaged;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManaged">DataAwsccDeadlineFleetConfigurationCustomerManaged</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get"></a>

```typescript
public get(index: number): DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get"></a>

```typescript
public get(index: number): DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTotalMemoryMiB">acceleratorTotalMemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTypes">acceleratorTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.cpuArchitectureType">cpuArchitectureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAmounts">customAmounts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAttributes">customAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.memoryMiB">memoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.vCpuCount">vCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference</a>

---

##### `acceleratorTotalMemoryMiB`<sup>Required</sup> <a name="acceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTotalMemoryMiB"></a>

```typescript
public readonly acceleratorTotalMemoryMiB: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference</a>

---

##### `acceleratorTypes`<sup>Required</sup> <a name="acceleratorTypes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTypes"></a>

```typescript
public readonly acceleratorTypes: string[];
```

- *Type:* string[]

---

##### `cpuArchitectureType`<sup>Required</sup> <a name="cpuArchitectureType" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.cpuArchitectureType"></a>

```typescript
public readonly cpuArchitectureType: string;
```

- *Type:* string

---

##### `customAmounts`<sup>Required</sup> <a name="customAmounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAmounts"></a>

```typescript
public readonly customAmounts: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList</a>

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAttributes"></a>

```typescript
public readonly customAttributes: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList</a>

---

##### `memoryMiB`<sup>Required</sup> <a name="memoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.memoryMiB"></a>

```typescript
public readonly memoryMiB: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference</a>

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `vCpuCount`<sup>Required</sup> <a name="vCpuCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.vCpuCount"></a>

```typescript
public readonly vCpuCount: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a>

---


### DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference <a name="DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a>

---


### DataAwsccDeadlineFleetConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.customerManaged">customerManaged</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.serviceManagedEc2">serviceManagedEc2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfiguration">DataAwsccDeadlineFleetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManaged`<sup>Required</sup> <a name="customerManaged" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.customerManaged"></a>

```typescript
public readonly customerManaged: DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference">DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference</a>

---

##### `serviceManagedEc2`<sup>Required</sup> <a name="serviceManagedEc2" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.serviceManagedEc2"></a>

```typescript
public readonly serviceManagedEc2: DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfiguration">DataAwsccDeadlineFleetConfiguration</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute">scaleOutWorkersPerMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.standbyWorkerCount">standbyWorkerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds">workerIdleDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleOutWorkersPerMinute`<sup>Required</sup> <a name="scaleOutWorkersPerMinute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute"></a>

```typescript
public readonly scaleOutWorkersPerMinute: number;
```

- *Type:* number

---

##### `standbyWorkerCount`<sup>Required</sup> <a name="standbyWorkerCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.standbyWorkerCount"></a>

```typescript
public readonly standbyWorkerCount: number;
```

- *Type:* number

---

##### `workerIdleDurationSeconds`<sup>Required</sup> <a name="workerIdleDurationSeconds" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds"></a>

```typescript
public readonly workerIdleDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.count">count</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.selections">selections</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.count"></a>

```typescript
public readonly count: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference</a>

---

##### `selections`<sup>Required</sup> <a name="selections" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.selections"></a>

```typescript
public readonly selections: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get"></a>

```typescript
public get(index: number): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get"></a>

```typescript
public get(index: number): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get"></a>

```typescript
public get(index: number): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.acceleratorCapabilities">acceleratorCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.allowedInstanceTypes">allowedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.cpuArchitectureType">cpuArchitectureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAmounts">customAmounts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAttributes">customAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.memoryMiB">memoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.rootEbsVolume">rootEbsVolume</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.vCpuCount">vCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorCapabilities`<sup>Required</sup> <a name="acceleratorCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.acceleratorCapabilities"></a>

```typescript
public readonly acceleratorCapabilities: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference</a>

---

##### `allowedInstanceTypes`<sup>Required</sup> <a name="allowedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.allowedInstanceTypes"></a>

```typescript
public readonly allowedInstanceTypes: string[];
```

- *Type:* string[]

---

##### `cpuArchitectureType`<sup>Required</sup> <a name="cpuArchitectureType" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.cpuArchitectureType"></a>

```typescript
public readonly cpuArchitectureType: string;
```

- *Type:* string

---

##### `customAmounts`<sup>Required</sup> <a name="customAmounts" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAmounts"></a>

```typescript
public readonly customAmounts: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList</a>

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAttributes"></a>

```typescript
public readonly customAttributes: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList</a>

---

##### `excludedInstanceTypes`<sup>Required</sup> <a name="excludedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.excludedInstanceTypes"></a>

```typescript
public readonly excludedInstanceTypes: string[];
```

- *Type:* string[]

---

##### `memoryMiB`<sup>Required</sup> <a name="memoryMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.memoryMiB"></a>

```typescript
public readonly memoryMiB: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference</a>

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `rootEbsVolume`<sup>Required</sup> <a name="rootEbsVolume" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.rootEbsVolume"></a>

```typescript
public readonly rootEbsVolume: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference</a>

---

##### `vCpuCount`<sup>Required</sup> <a name="vCpuCount" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.vCpuCount"></a>

```typescript
public readonly vCpuCount: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.sizeGiB">sizeGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.throughputMiB">throughputMiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `sizeGiB`<sup>Required</sup> <a name="sizeGiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.sizeGiB"></a>

```typescript
public readonly sizeGiB: number;
```

- *Type:* number

---

##### `throughputMiB`<sup>Required</sup> <a name="throughputMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.throughputMiB"></a>

```typescript
public readonly throughputMiB: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.autoScalingConfiguration">autoScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceCapabilities">instanceCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceMarketOptions">instanceMarketOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.persistentVolumeConfiguration">persistentVolumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.storageProfileId">storageProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2">DataAwsccDeadlineFleetConfigurationServiceManagedEc2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoScalingConfiguration`<sup>Required</sup> <a name="autoScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.autoScalingConfiguration"></a>

```typescript
public readonly autoScalingConfiguration: DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference</a>

---

##### `instanceCapabilities`<sup>Required</sup> <a name="instanceCapabilities" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceCapabilities"></a>

```typescript
public readonly instanceCapabilities: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference</a>

---

##### `instanceMarketOptions`<sup>Required</sup> <a name="instanceMarketOptions" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceMarketOptions"></a>

```typescript
public readonly instanceMarketOptions: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference</a>

---

##### `persistentVolumeConfiguration`<sup>Required</sup> <a name="persistentVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.persistentVolumeConfiguration"></a>

```typescript
public readonly persistentVolumeConfiguration: DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference</a>

---

##### `storageProfileId`<sup>Required</sup> <a name="storageProfileId" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.storageProfileId"></a>

```typescript
public readonly storageProfileId: string;
```

- *Type:* string

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference">DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationServiceManagedEc2;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2">DataAwsccDeadlineFleetConfigurationServiceManagedEc2</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.lastUsedTtlHours">lastUsedTtlHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.sizeGiB">sizeGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.throughputMiB">throughputMiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `lastUsedTtlHours`<sup>Required</sup> <a name="lastUsedTtlHours" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.lastUsedTtlHours"></a>

```typescript
public readonly lastUsedTtlHours: number;
```

- *Type:* number

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `sizeGiB`<sup>Required</sup> <a name="sizeGiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.sizeGiB"></a>

```typescript
public readonly sizeGiB: number;
```

- *Type:* number

---

##### `throughputMiB`<sup>Required</sup> <a name="throughputMiB" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.throughputMiB"></a>

```typescript
public readonly throughputMiB: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a>

---


### DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference <a name="DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.resourceConfigurationArns">resourceConfigurationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceConfigurationArns`<sup>Required</sup> <a name="resourceConfigurationArns" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.resourceConfigurationArns"></a>

```typescript
public readonly resourceConfigurationArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a>

---


### DataAwsccDeadlineFleetHostConfigurationOutputReference <a name="DataAwsccDeadlineFleetHostConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.scriptBody">scriptBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.scriptTimeoutSeconds">scriptTimeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfiguration">DataAwsccDeadlineFleetHostConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptBody`<sup>Required</sup> <a name="scriptBody" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.scriptBody"></a>

```typescript
public readonly scriptBody: string;
```

- *Type:* string

---

##### `scriptTimeoutSeconds`<sup>Required</sup> <a name="scriptTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.scriptTimeoutSeconds"></a>

```typescript
public readonly scriptTimeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetHostConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetHostConfiguration">DataAwsccDeadlineFleetHostConfiguration</a>

---


### DataAwsccDeadlineFleetTagsList <a name="DataAwsccDeadlineFleetTagsList" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDeadlineFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDeadlineFleetTagsOutputReference <a name="DataAwsccDeadlineFleetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDeadlineFleet } from '@cdktn/provider-awscc'

new dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTags">DataAwsccDeadlineFleetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDeadlineFleetTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDeadlineFleet.DataAwsccDeadlineFleetTags">DataAwsccDeadlineFleetTags</a>

---



