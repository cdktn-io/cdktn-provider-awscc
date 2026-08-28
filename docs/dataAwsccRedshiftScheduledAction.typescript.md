# `dataAwsccRedshiftScheduledAction` Submodule <a name="`dataAwsccRedshiftScheduledAction` Submodule" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRedshiftScheduledAction <a name="DataAwsccRedshiftScheduledAction" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/redshift_scheduled_action awscc_redshift_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer"></a>

```typescript
import { dataAwsccRedshiftScheduledAction } from '@cdktn/provider-awscc'

new dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction(scope: Construct, id: string, config: DataAwsccRedshiftScheduledActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig">DataAwsccRedshiftScheduledActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig">DataAwsccRedshiftScheduledActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRedshiftScheduledAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isConstruct"></a>

```typescript
import { dataAwsccRedshiftScheduledAction } from '@cdktn/provider-awscc'

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isTerraformElement"></a>

```typescript
import { dataAwsccRedshiftScheduledAction } from '@cdktn/provider-awscc'

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isTerraformDataSource"></a>

```typescript
import { dataAwsccRedshiftScheduledAction } from '@cdktn/provider-awscc'

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.generateConfigForImport"></a>

```typescript
import { dataAwsccRedshiftScheduledAction } from '@cdktn/provider-awscc'

dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRedshiftScheduledAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRedshiftScheduledAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRedshiftScheduledAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/redshift_scheduled_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRedshiftScheduledAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.enable">enable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.iamRole">iamRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.nextInvocations">nextInvocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.scheduledActionDescription">scheduledActionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.scheduledActionName">scheduledActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.targetAction">targetAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference">DataAwsccRedshiftScheduledActionTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.enable"></a>

```typescript
public readonly enable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.iamRole"></a>

```typescript
public readonly iamRole: string;
```

- *Type:* string

---

##### `nextInvocations`<sup>Required</sup> <a name="nextInvocations" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.nextInvocations"></a>

```typescript
public readonly nextInvocations: string[];
```

- *Type:* string[]

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `scheduledActionDescription`<sup>Required</sup> <a name="scheduledActionDescription" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.scheduledActionDescription"></a>

```typescript
public readonly scheduledActionDescription: string;
```

- *Type:* string

---

##### `scheduledActionName`<sup>Required</sup> <a name="scheduledActionName" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.scheduledActionName"></a>

```typescript
public readonly scheduledActionName: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.targetAction"></a>

```typescript
public readonly targetAction: DataAwsccRedshiftScheduledActionTargetActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference">DataAwsccRedshiftScheduledActionTargetActionOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRedshiftScheduledActionConfig <a name="DataAwsccRedshiftScheduledActionConfig" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.Initializer"></a>

```typescript
import { dataAwsccRedshiftScheduledAction } from '@cdktn/provider-awscc'

const dataAwsccRedshiftScheduledActionConfig: dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/redshift_scheduled_action#id DataAwsccRedshiftScheduledAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRedshiftScheduledActionTargetAction <a name="DataAwsccRedshiftScheduledActionTargetAction" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetAction.Initializer"></a>

```typescript
import { dataAwsccRedshiftScheduledAction } from '@cdktn/provider-awscc'

const dataAwsccRedshiftScheduledActionTargetAction: dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetAction = { ... }
```


### DataAwsccRedshiftScheduledActionTargetActionPauseCluster <a name="DataAwsccRedshiftScheduledActionTargetActionPauseCluster" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseCluster.Initializer"></a>

```typescript
import { dataAwsccRedshiftScheduledAction } from '@cdktn/provider-awscc'

const dataAwsccRedshiftScheduledActionTargetActionPauseCluster: dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseCluster = { ... }
```


### DataAwsccRedshiftScheduledActionTargetActionResizeCluster <a name="DataAwsccRedshiftScheduledActionTargetActionResizeCluster" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeCluster.Initializer"></a>

```typescript
import { dataAwsccRedshiftScheduledAction } from '@cdktn/provider-awscc'

const dataAwsccRedshiftScheduledActionTargetActionResizeCluster: dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeCluster = { ... }
```


### DataAwsccRedshiftScheduledActionTargetActionResumeCluster <a name="DataAwsccRedshiftScheduledActionTargetActionResumeCluster" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeCluster.Initializer"></a>

```typescript
import { dataAwsccRedshiftScheduledAction } from '@cdktn/provider-awscc'

const dataAwsccRedshiftScheduledActionTargetActionResumeCluster: dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeCluster = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRedshiftScheduledActionTargetActionOutputReference <a name="DataAwsccRedshiftScheduledActionTargetActionOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.Initializer"></a>

```typescript
import { dataAwsccRedshiftScheduledAction } from '@cdktn/provider-awscc'

new dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.pauseCluster">pauseCluster</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference">DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.resizeCluster">resizeCluster</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference">DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.resumeCluster">resumeCluster</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference">DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetAction">DataAwsccRedshiftScheduledActionTargetAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pauseCluster`<sup>Required</sup> <a name="pauseCluster" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.pauseCluster"></a>

```typescript
public readonly pauseCluster: DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference">DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference</a>

---

##### `resizeCluster`<sup>Required</sup> <a name="resizeCluster" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.resizeCluster"></a>

```typescript
public readonly resizeCluster: DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference">DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference</a>

---

##### `resumeCluster`<sup>Required</sup> <a name="resumeCluster" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.resumeCluster"></a>

```typescript
public readonly resumeCluster: DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference">DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRedshiftScheduledActionTargetAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetAction">DataAwsccRedshiftScheduledActionTargetAction</a>

---


### DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference <a name="DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer"></a>

```typescript
import { dataAwsccRedshiftScheduledAction } from '@cdktn/provider-awscc'

new dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseCluster">DataAwsccRedshiftScheduledActionTargetActionPauseCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRedshiftScheduledActionTargetActionPauseCluster;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionPauseCluster">DataAwsccRedshiftScheduledActionTargetActionPauseCluster</a>

---


### DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference <a name="DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer"></a>

```typescript
import { dataAwsccRedshiftScheduledAction } from '@cdktn/provider-awscc'

new dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classic">classic</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodes">numberOfNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeCluster">DataAwsccRedshiftScheduledActionTargetActionResizeCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classic`<sup>Required</sup> <a name="classic" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classic"></a>

```typescript
public readonly classic: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `numberOfNodes`<sup>Required</sup> <a name="numberOfNodes" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodes"></a>

```typescript
public readonly numberOfNodes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRedshiftScheduledActionTargetActionResizeCluster;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResizeCluster">DataAwsccRedshiftScheduledActionTargetActionResizeCluster</a>

---


### DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference <a name="DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer"></a>

```typescript
import { dataAwsccRedshiftScheduledAction } from '@cdktn/provider-awscc'

new dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeCluster">DataAwsccRedshiftScheduledActionTargetActionResumeCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRedshiftScheduledActionTargetActionResumeCluster;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftScheduledAction.DataAwsccRedshiftScheduledActionTargetActionResumeCluster">DataAwsccRedshiftScheduledActionTargetActionResumeCluster</a>

---



