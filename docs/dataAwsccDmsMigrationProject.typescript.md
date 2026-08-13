# `dataAwsccDmsMigrationProject` Submodule <a name="`dataAwsccDmsMigrationProject` Submodule" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDmsMigrationProject <a name="DataAwsccDmsMigrationProject" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dms_migration_project awscc_dms_migration_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

new dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject(scope: Construct, id: string, config: DataAwsccDmsMigrationProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig">DataAwsccDmsMigrationProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig">DataAwsccDmsMigrationProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDmsMigrationProject resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isConstruct"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformElement"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformDataSource"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDmsMigrationProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDmsMigrationProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDmsMigrationProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dms_migration_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDmsMigrationProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileIdentifier">instanceProfileIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileName">instanceProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectArn">migrationProjectArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectCreationTime">migrationProjectCreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectIdentifier">migrationProjectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectName">migrationProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.schemaConversionApplicationAttributes">schemaConversionApplicationAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference">DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.sourceDataProviderDescriptors">sourceDataProviderDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList">DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList">DataAwsccDmsMigrationProjectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.targetDataProviderDescriptors">targetDataProviderDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList">DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.transformationRules">transformationRules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

---

##### `instanceProfileIdentifier`<sup>Required</sup> <a name="instanceProfileIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileIdentifier"></a>

```typescript
public readonly instanceProfileIdentifier: string;
```

- *Type:* string

---

##### `instanceProfileName`<sup>Required</sup> <a name="instanceProfileName" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.instanceProfileName"></a>

```typescript
public readonly instanceProfileName: string;
```

- *Type:* string

---

##### `migrationProjectArn`<sup>Required</sup> <a name="migrationProjectArn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectArn"></a>

```typescript
public readonly migrationProjectArn: string;
```

- *Type:* string

---

##### `migrationProjectCreationTime`<sup>Required</sup> <a name="migrationProjectCreationTime" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectCreationTime"></a>

```typescript
public readonly migrationProjectCreationTime: string;
```

- *Type:* string

---

##### `migrationProjectIdentifier`<sup>Required</sup> <a name="migrationProjectIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectIdentifier"></a>

```typescript
public readonly migrationProjectIdentifier: string;
```

- *Type:* string

---

##### `migrationProjectName`<sup>Required</sup> <a name="migrationProjectName" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.migrationProjectName"></a>

```typescript
public readonly migrationProjectName: string;
```

- *Type:* string

---

##### `schemaConversionApplicationAttributes`<sup>Required</sup> <a name="schemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.schemaConversionApplicationAttributes"></a>

```typescript
public readonly schemaConversionApplicationAttributes: DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference">DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference</a>

---

##### `sourceDataProviderDescriptors`<sup>Required</sup> <a name="sourceDataProviderDescriptors" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.sourceDataProviderDescriptors"></a>

```typescript
public readonly sourceDataProviderDescriptors: DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList">DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.tags"></a>

```typescript
public readonly tags: DataAwsccDmsMigrationProjectTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList">DataAwsccDmsMigrationProjectTagsList</a>

---

##### `targetDataProviderDescriptors`<sup>Required</sup> <a name="targetDataProviderDescriptors" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.targetDataProviderDescriptors"></a>

```typescript
public readonly targetDataProviderDescriptors: DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList">DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList</a>

---

##### `transformationRules`<sup>Required</sup> <a name="transformationRules" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.transformationRules"></a>

```typescript
public readonly transformationRules: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDmsMigrationProjectConfig <a name="DataAwsccDmsMigrationProjectConfig" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.Initializer"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

const dataAwsccDmsMigrationProjectConfig: dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dms_migration_project#id DataAwsccDmsMigrationProject#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes <a name="DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes.Initializer"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

const dataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes: dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes = { ... }
```


### DataAwsccDmsMigrationProjectSourceDataProviderDescriptors <a name="DataAwsccDmsMigrationProjectSourceDataProviderDescriptors" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors.Initializer"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

const dataAwsccDmsMigrationProjectSourceDataProviderDescriptors: dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors = { ... }
```


### DataAwsccDmsMigrationProjectTags <a name="DataAwsccDmsMigrationProjectTags" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTags.Initializer"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

const dataAwsccDmsMigrationProjectTags: dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTags = { ... }
```


### DataAwsccDmsMigrationProjectTargetDataProviderDescriptors <a name="DataAwsccDmsMigrationProjectTargetDataProviderDescriptors" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors.Initializer"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

const dataAwsccDmsMigrationProjectTargetDataProviderDescriptors: dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference <a name="DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

new dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath">s3BucketPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn">s3BucketRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes">DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketPath`<sup>Required</sup> <a name="s3BucketPath" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath"></a>

```typescript
public readonly s3BucketPath: string;
```

- *Type:* string

---

##### `s3BucketRoleArn`<sup>Required</sup> <a name="s3BucketRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn"></a>

```typescript
public readonly s3BucketRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes">DataAwsccDmsMigrationProjectSchemaConversionApplicationAttributes</a>

---


### DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList <a name="DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

new dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.get"></a>

```typescript
public get(index: number): DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference <a name="DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

new dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArn">dataProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifier">dataProviderIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderName">dataProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors">DataAwsccDmsMigrationProjectSourceDataProviderDescriptors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArn"></a>

```typescript
public readonly dataProviderArn: string;
```

- *Type:* string

---

##### `dataProviderIdentifier`<sup>Required</sup> <a name="dataProviderIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifier"></a>

```typescript
public readonly dataProviderIdentifier: string;
```

- *Type:* string

---

##### `dataProviderName`<sup>Required</sup> <a name="dataProviderName" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderName"></a>

```typescript
public readonly dataProviderName: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsMigrationProjectSourceDataProviderDescriptors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectSourceDataProviderDescriptors">DataAwsccDmsMigrationProjectSourceDataProviderDescriptors</a>

---


### DataAwsccDmsMigrationProjectTagsList <a name="DataAwsccDmsMigrationProjectTagsList" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

new dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDmsMigrationProjectTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDmsMigrationProjectTagsOutputReference <a name="DataAwsccDmsMigrationProjectTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

new dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTags">DataAwsccDmsMigrationProjectTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsMigrationProjectTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTags">DataAwsccDmsMigrationProjectTags</a>

---


### DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList <a name="DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

new dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.get"></a>

```typescript
public get(index: number): DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference <a name="DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsMigrationProject } from '@cdktn/provider-awscc'

new dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArn">dataProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifier">dataProviderIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderName">dataProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors">DataAwsccDmsMigrationProjectTargetDataProviderDescriptors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArn"></a>

```typescript
public readonly dataProviderArn: string;
```

- *Type:* string

---

##### `dataProviderIdentifier`<sup>Required</sup> <a name="dataProviderIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifier"></a>

```typescript
public readonly dataProviderIdentifier: string;
```

- *Type:* string

---

##### `dataProviderName`<sup>Required</sup> <a name="dataProviderName" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderName"></a>

```typescript
public readonly dataProviderName: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsMigrationProjectTargetDataProviderDescriptors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsMigrationProject.DataAwsccDmsMigrationProjectTargetDataProviderDescriptors">DataAwsccDmsMigrationProjectTargetDataProviderDescriptors</a>

---



