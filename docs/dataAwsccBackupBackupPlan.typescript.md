# `dataAwsccBackupBackupPlan` Submodule <a name="`dataAwsccBackupBackupPlan` Submodule" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBackupBackupPlan <a name="DataAwsccBackupBackupPlan" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/backup_backup_plan awscc_backup_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan(scope: Construct, id: string, config: DataAwsccBackupBackupPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig">DataAwsccBackupBackupPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig">DataAwsccBackupBackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBackupBackupPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isConstruct"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isTerraformElement"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isTerraformDataSource"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.generateConfigForImport"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBackupBackupPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBackupBackupPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBackupBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/backup_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBackupBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlan">backupPlan</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference">DataAwsccBackupBackupPlanBackupPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlanArn">backupPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlanId">backupPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlanTags">backupPlanTags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlan"></a>

```typescript
public readonly backupPlan: DataAwsccBackupBackupPlanBackupPlanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference">DataAwsccBackupBackupPlanBackupPlanOutputReference</a>

---

##### `backupPlanArn`<sup>Required</sup> <a name="backupPlanArn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlanArn"></a>

```typescript
public readonly backupPlanArn: string;
```

- *Type:* string

---

##### `backupPlanId`<sup>Required</sup> <a name="backupPlanId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlanId"></a>

```typescript
public readonly backupPlanId: string;
```

- *Type:* string

---

##### `backupPlanTags`<sup>Required</sup> <a name="backupPlanTags" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.backupPlanTags"></a>

```typescript
public readonly backupPlanTags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBackupBackupPlanBackupPlan <a name="DataAwsccBackupBackupPlanBackupPlan" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlan.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

const dataAwsccBackupBackupPlanBackupPlan: dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlan = { ... }
```


### DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings <a name="DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

const dataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings: dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings = { ... }
```


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRule <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRule" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRule.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

const dataAwsccBackupBackupPlanBackupPlanBackupPlanRule: dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRule = { ... }
```


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

const dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions: dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions = { ... }
```


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

const dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle: dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle = { ... }
```


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

const dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions: dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions = { ... }
```


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

const dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle: dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle = { ... }
```


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

const dataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions: dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions = { ... }
```


### DataAwsccBackupBackupPlanBackupPlanScanSettings <a name="DataAwsccBackupBackupPlanBackupPlanScanSettings" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettings.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

const dataAwsccBackupBackupPlanBackupPlanScanSettings: dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettings = { ... }
```


### DataAwsccBackupBackupPlanConfig <a name="DataAwsccBackupBackupPlanConfig" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

const dataAwsccBackupBackupPlanConfig: dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/backup_backup_plan#id DataAwsccBackupBackupPlan#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList <a name="DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.get"></a>

```typescript
public get(index: number): DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptions">backupOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings">DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupOptions`<sup>Required</sup> <a name="backupOptions" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptions"></a>

```typescript
public readonly backupOptions: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings">DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettings</a>

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDays">deleteAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDays">moveToColdStorageAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResources">optInToArchiveForSupportedResources</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteAfterDays`<sup>Required</sup> <a name="deleteAfterDays" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDays"></a>

```typescript
public readonly deleteAfterDays: number;
```

- *Type:* number

---

##### `moveToColdStorageAfterDays`<sup>Required</sup> <a name="moveToColdStorageAfterDays" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDays"></a>

```typescript
public readonly moveToColdStorageAfterDays: number;
```

- *Type:* number

---

##### `optInToArchiveForSupportedResources`<sup>Required</sup> <a name="optInToArchiveForSupportedResources" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```typescript
public readonly optInToArchiveForSupportedResources: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get"></a>

```typescript
public get(index: number): DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArn">destinationBackupVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationBackupVaultArn`<sup>Required</sup> <a name="destinationBackupVaultArn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArn"></a>

```typescript
public readonly destinationBackupVaultArn: string;
```

- *Type:* string

---

##### `lifecycle`<sup>Required</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycle"></a>

```typescript
public readonly lifecycle: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActions</a>

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get"></a>

```typescript
public get(index: number): DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActions</a>

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDays">deleteAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDays">moveToColdStorageAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources">optInToArchiveForSupportedResources</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteAfterDays`<sup>Required</sup> <a name="deleteAfterDays" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDays"></a>

```typescript
public readonly deleteAfterDays: number;
```

- *Type:* number

---

##### `moveToColdStorageAfterDays`<sup>Required</sup> <a name="moveToColdStorageAfterDays" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDays"></a>

```typescript
public readonly moveToColdStorageAfterDays: number;
```

- *Type:* number

---

##### `optInToArchiveForSupportedResources`<sup>Required</sup> <a name="optInToArchiveForSupportedResources" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```typescript
public readonly optInToArchiveForSupportedResources: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.get"></a>

```typescript
public get(index: number): DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutes">completionWindowMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActions">copyActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackup">enableContinuousBackup</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActions">indexActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycle">lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTags">recoveryPointTags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActions">scanActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutes">startWindowMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVault">targetBackupVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn">targetLogicallyAirGappedBackupVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRule">DataAwsccBackupBackupPlanBackupPlanBackupPlanRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `completionWindowMinutes`<sup>Required</sup> <a name="completionWindowMinutes" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutes"></a>

```typescript
public readonly completionWindowMinutes: number;
```

- *Type:* number

---

##### `copyActions`<sup>Required</sup> <a name="copyActions" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActions"></a>

```typescript
public readonly copyActions: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList</a>

---

##### `enableContinuousBackup`<sup>Required</sup> <a name="enableContinuousBackup" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackup"></a>

```typescript
public readonly enableContinuousBackup: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `indexActions`<sup>Required</sup> <a name="indexActions" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActions"></a>

```typescript
public readonly indexActions: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList</a>

---

##### `lifecycle`<sup>Required</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycle"></a>

```typescript
public readonly lifecycle: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference</a>

---

##### `recoveryPointTags`<sup>Required</sup> <a name="recoveryPointTags" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTags"></a>

```typescript
public readonly recoveryPointTags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `scanActions`<sup>Required</sup> <a name="scanActions" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActions"></a>

```typescript
public readonly scanActions: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList</a>

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `scheduleExpressionTimezone`<sup>Required</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezone"></a>

```typescript
public readonly scheduleExpressionTimezone: string;
```

- *Type:* string

---

##### `startWindowMinutes`<sup>Required</sup> <a name="startWindowMinutes" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutes"></a>

```typescript
public readonly startWindowMinutes: number;
```

- *Type:* number

---

##### `targetBackupVault`<sup>Required</sup> <a name="targetBackupVault" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVault"></a>

```typescript
public readonly targetBackupVault: string;
```

- *Type:* string

---

##### `targetLogicallyAirGappedBackupVaultArn`<sup>Required</sup> <a name="targetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn"></a>

```typescript
public readonly targetLogicallyAirGappedBackupVaultArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBackupBackupPlanBackupPlanBackupPlanRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRule">DataAwsccBackupBackupPlanBackupPlanBackupPlanRule</a>

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get"></a>

```typescript
public get(index: number): DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScanner">malwareScanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanMode">scanMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `malwareScanner`<sup>Required</sup> <a name="malwareScanner" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScanner"></a>

```typescript
public readonly malwareScanner: string;
```

- *Type:* string

---

##### `scanMode`<sup>Required</sup> <a name="scanMode" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanMode"></a>

```typescript
public readonly scanMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleScanActions</a>

---


### DataAwsccBackupBackupPlanBackupPlanOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettings">advancedBackupSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList">DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.backupPlanName">backupPlanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.backupPlanRule">backupPlanRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.scanSettings">scanSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList">DataAwsccBackupBackupPlanBackupPlanScanSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlan">DataAwsccBackupBackupPlanBackupPlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedBackupSettings`<sup>Required</sup> <a name="advancedBackupSettings" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettings"></a>

```typescript
public readonly advancedBackupSettings: DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList">DataAwsccBackupBackupPlanBackupPlanAdvancedBackupSettingsList</a>

---

##### `backupPlanName`<sup>Required</sup> <a name="backupPlanName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.backupPlanName"></a>

```typescript
public readonly backupPlanName: string;
```

- *Type:* string

---

##### `backupPlanRule`<sup>Required</sup> <a name="backupPlanRule" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.backupPlanRule"></a>

```typescript
public readonly backupPlanRule: DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList">DataAwsccBackupBackupPlanBackupPlanBackupPlanRuleList</a>

---

##### `scanSettings`<sup>Required</sup> <a name="scanSettings" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.scanSettings"></a>

```typescript
public readonly scanSettings: DataAwsccBackupBackupPlanBackupPlanScanSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList">DataAwsccBackupBackupPlanBackupPlanScanSettingsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBackupBackupPlanBackupPlan;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlan">DataAwsccBackupBackupPlanBackupPlan</a>

---


### DataAwsccBackupBackupPlanBackupPlanScanSettingsList <a name="DataAwsccBackupBackupPlanBackupPlanScanSettingsList" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.get"></a>

```typescript
public get(index: number): DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference <a name="DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBackupBackupPlan } from '@cdktn/provider-awscc'

new dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScanner">malwareScanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArn">scannerRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettings">DataAwsccBackupBackupPlanBackupPlanScanSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `malwareScanner`<sup>Required</sup> <a name="malwareScanner" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScanner"></a>

```typescript
public readonly malwareScanner: string;
```

- *Type:* string

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `scannerRoleArn`<sup>Required</sup> <a name="scannerRoleArn" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArn"></a>

```typescript
public readonly scannerRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBackupBackupPlanBackupPlanScanSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupPlan.DataAwsccBackupBackupPlanBackupPlanScanSettings">DataAwsccBackupBackupPlanBackupPlanScanSettings</a>

---



