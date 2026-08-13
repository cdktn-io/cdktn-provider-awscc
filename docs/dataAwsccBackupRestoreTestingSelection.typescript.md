# `dataAwsccBackupRestoreTestingSelection` Submodule <a name="`dataAwsccBackupRestoreTestingSelection` Submodule" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBackupRestoreTestingSelection <a name="DataAwsccBackupRestoreTestingSelection" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/backup_restore_testing_selection awscc_backup_restore_testing_selection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.Initializer"></a>

```typescript
import { dataAwsccBackupRestoreTestingSelection } from '@cdktn/provider-awscc'

new dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection(scope: Construct, id: string, config: DataAwsccBackupRestoreTestingSelectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig">DataAwsccBackupRestoreTestingSelectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig">DataAwsccBackupRestoreTestingSelectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBackupRestoreTestingSelection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isConstruct"></a>

```typescript
import { dataAwsccBackupRestoreTestingSelection } from '@cdktn/provider-awscc'

dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isTerraformElement"></a>

```typescript
import { dataAwsccBackupRestoreTestingSelection } from '@cdktn/provider-awscc'

dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isTerraformDataSource"></a>

```typescript
import { dataAwsccBackupRestoreTestingSelection } from '@cdktn/provider-awscc'

dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.generateConfigForImport"></a>

```typescript
import { dataAwsccBackupRestoreTestingSelection } from '@cdktn/provider-awscc'

dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBackupRestoreTestingSelection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBackupRestoreTestingSelection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBackupRestoreTestingSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/backup_restore_testing_selection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBackupRestoreTestingSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.protectedResourceArns">protectedResourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.protectedResourceConditions">protectedResourceConditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.protectedResourceType">protectedResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.restoreMetadataOverrides">restoreMetadataOverrides</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.restoreTestingPlanName">restoreTestingPlanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.restoreTestingSelectionName">restoreTestingSelectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.validationWindowHours">validationWindowHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `protectedResourceArns`<sup>Required</sup> <a name="protectedResourceArns" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.protectedResourceArns"></a>

```typescript
public readonly protectedResourceArns: string[];
```

- *Type:* string[]

---

##### `protectedResourceConditions`<sup>Required</sup> <a name="protectedResourceConditions" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.protectedResourceConditions"></a>

```typescript
public readonly protectedResourceConditions: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference</a>

---

##### `protectedResourceType`<sup>Required</sup> <a name="protectedResourceType" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.protectedResourceType"></a>

```typescript
public readonly protectedResourceType: string;
```

- *Type:* string

---

##### `restoreMetadataOverrides`<sup>Required</sup> <a name="restoreMetadataOverrides" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.restoreMetadataOverrides"></a>

```typescript
public readonly restoreMetadataOverrides: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `restoreTestingPlanName`<sup>Required</sup> <a name="restoreTestingPlanName" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.restoreTestingPlanName"></a>

```typescript
public readonly restoreTestingPlanName: string;
```

- *Type:* string

---

##### `restoreTestingSelectionName`<sup>Required</sup> <a name="restoreTestingSelectionName" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.restoreTestingSelectionName"></a>

```typescript
public readonly restoreTestingSelectionName: string;
```

- *Type:* string

---

##### `validationWindowHours`<sup>Required</sup> <a name="validationWindowHours" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.validationWindowHours"></a>

```typescript
public readonly validationWindowHours: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBackupRestoreTestingSelectionConfig <a name="DataAwsccBackupRestoreTestingSelectionConfig" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.Initializer"></a>

```typescript
import { dataAwsccBackupRestoreTestingSelection } from '@cdktn/provider-awscc'

const dataAwsccBackupRestoreTestingSelectionConfig: dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/backup_restore_testing_selection#id DataAwsccBackupRestoreTestingSelection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions.Initializer"></a>

```typescript
import { dataAwsccBackupRestoreTestingSelection } from '@cdktn/provider-awscc'

const dataAwsccBackupRestoreTestingSelectionProtectedResourceConditions: dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions = { ... }
```


### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.Initializer"></a>

```typescript
import { dataAwsccBackupRestoreTestingSelection } from '@cdktn/provider-awscc'

const dataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals: dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals = { ... }
```


### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.Initializer"></a>

```typescript
import { dataAwsccBackupRestoreTestingSelection } from '@cdktn/provider-awscc'

const dataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals: dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBackupRestoreTestingSelection } from '@cdktn/provider-awscc'

new dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEquals">stringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEquals">stringNotEquals</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stringEquals`<sup>Required</sup> <a name="stringEquals" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEquals"></a>

```typescript
public readonly stringEquals: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList</a>

---

##### `stringNotEquals`<sup>Required</sup> <a name="stringNotEquals" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEquals"></a>

```typescript
public readonly stringNotEquals: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditions</a>

---


### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer"></a>

```typescript
import { dataAwsccBackupRestoreTestingSelection } from '@cdktn/provider-awscc'

new dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get"></a>

```typescript
public get(index: number): DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBackupRestoreTestingSelection } from '@cdktn/provider-awscc'

new dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>

---


### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer"></a>

```typescript
import { dataAwsccBackupRestoreTestingSelection } from '@cdktn/provider-awscc'

new dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get"></a>

```typescript
public get(index: number): DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference <a name="DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBackupRestoreTestingSelection } from '@cdktn/provider-awscc'

new dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupRestoreTestingSelection.DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">DataAwsccBackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>

---



