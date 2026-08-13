# `dataAwsccBackupLogicallyAirGappedBackupVault` Submodule <a name="`dataAwsccBackupLogicallyAirGappedBackupVault` Submodule" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBackupLogicallyAirGappedBackupVault <a name="DataAwsccBackupLogicallyAirGappedBackupVault" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/backup_logically_air_gapped_backup_vault awscc_backup_logically_air_gapped_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer"></a>

```typescript
import { dataAwsccBackupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

new dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault(scope: Construct, id: string, config: DataAwsccBackupLogicallyAirGappedBackupVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig">DataAwsccBackupLogicallyAirGappedBackupVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig">DataAwsccBackupLogicallyAirGappedBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBackupLogicallyAirGappedBackupVault resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isConstruct"></a>

```typescript
import { dataAwsccBackupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformElement"></a>

```typescript
import { dataAwsccBackupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformDataSource"></a>

```typescript
import { dataAwsccBackupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport"></a>

```typescript
import { dataAwsccBackupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBackupLogicallyAirGappedBackupVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBackupLogicallyAirGappedBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBackupLogicallyAirGappedBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/backup_logically_air_gapped_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBackupLogicallyAirGappedBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.accessPolicy">accessPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultArn">backupVaultArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultName">backupVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultTags">backupVaultTags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.maxRetentionDays">maxRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.minRetentionDays">minRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArn">mpaApprovalTeamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.notifications">notifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference">DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.vaultState">vaultState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.vaultType">vaultType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessPolicy`<sup>Required</sup> <a name="accessPolicy" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.accessPolicy"></a>

```typescript
public readonly accessPolicy: string;
```

- *Type:* string

---

##### `backupVaultArn`<sup>Required</sup> <a name="backupVaultArn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultArn"></a>

```typescript
public readonly backupVaultArn: string;
```

- *Type:* string

---

##### `backupVaultName`<sup>Required</sup> <a name="backupVaultName" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultName"></a>

```typescript
public readonly backupVaultName: string;
```

- *Type:* string

---

##### `backupVaultTags`<sup>Required</sup> <a name="backupVaultTags" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultTags"></a>

```typescript
public readonly backupVaultTags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.encryptionKeyArn"></a>

```typescript
public readonly encryptionKeyArn: string;
```

- *Type:* string

---

##### `maxRetentionDays`<sup>Required</sup> <a name="maxRetentionDays" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.maxRetentionDays"></a>

```typescript
public readonly maxRetentionDays: number;
```

- *Type:* number

---

##### `minRetentionDays`<sup>Required</sup> <a name="minRetentionDays" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.minRetentionDays"></a>

```typescript
public readonly minRetentionDays: number;
```

- *Type:* number

---

##### `mpaApprovalTeamArn`<sup>Required</sup> <a name="mpaApprovalTeamArn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArn"></a>

```typescript
public readonly mpaApprovalTeamArn: string;
```

- *Type:* string

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.notifications"></a>

```typescript
public readonly notifications: DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference">DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference</a>

---

##### `vaultState`<sup>Required</sup> <a name="vaultState" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.vaultState"></a>

```typescript
public readonly vaultState: string;
```

- *Type:* string

---

##### `vaultType`<sup>Required</sup> <a name="vaultType" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.vaultType"></a>

```typescript
public readonly vaultType: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBackupLogicallyAirGappedBackupVaultConfig <a name="DataAwsccBackupLogicallyAirGappedBackupVaultConfig" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.Initializer"></a>

```typescript
import { dataAwsccBackupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

const dataAwsccBackupLogicallyAirGappedBackupVaultConfig: dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/backup_logically_air_gapped_backup_vault#id DataAwsccBackupLogicallyAirGappedBackupVault#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBackupLogicallyAirGappedBackupVaultNotifications <a name="DataAwsccBackupLogicallyAirGappedBackupVaultNotifications" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications.Initializer"></a>

```typescript
import { dataAwsccBackupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

const dataAwsccBackupLogicallyAirGappedBackupVaultNotifications: dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference <a name="DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBackupLogicallyAirGappedBackupVault } from '@cdktn/provider-awscc'

new dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEvents">backupVaultEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications">DataAwsccBackupLogicallyAirGappedBackupVaultNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupVaultEvents`<sup>Required</sup> <a name="backupVaultEvents" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEvents"></a>

```typescript
public readonly backupVaultEvents: string[];
```

- *Type:* string[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBackupLogicallyAirGappedBackupVaultNotifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications">DataAwsccBackupLogicallyAirGappedBackupVaultNotifications</a>

---



