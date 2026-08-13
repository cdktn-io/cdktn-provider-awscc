# `glueDatabase` Submodule <a name="`glueDatabase` Submodule" id="@cdktn/provider-awscc.glueDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueDatabase <a name="GlueDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database awscc_glue_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

new glueDatabase.GlueDatabase(scope: Construct, id: string, config: GlueDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig">GlueDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig">GlueDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput">putDatabaseInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatabaseInput` <a name="putDatabaseInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput"></a>

```typescript
public putDatabaseInput(value: GlueDatabaseDatabaseInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a>

---

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isConstruct"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

glueDatabase.GlueDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformElement"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

glueDatabase.GlueDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformResource"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

glueDatabase.GlueDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

glueDatabase.GlueDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlueDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseInput">databaseInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference">GlueDatabaseDatabaseInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseInputInput">databaseInputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `databaseInput`<sup>Required</sup> <a name="databaseInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseInput"></a>

```typescript
public readonly databaseInput: GlueDatabaseDatabaseInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference">GlueDatabaseDatabaseInputOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseInputInput`<sup>Optional</sup> <a name="databaseInputInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseInputInput"></a>

```typescript
public readonly databaseInputInput: IResolvable | GlueDatabaseDatabaseInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueDatabaseConfig <a name="GlueDatabaseConfig" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.Initializer"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

const glueDatabaseConfig: glueDatabase.GlueDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.catalogId">catalogId</a></code> | <code>string</code> | The AWS account ID for the account in which to create the catalog object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.databaseInput">databaseInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a></code> | The metadata for the database. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database. For hive compatibility, this is folded to lowercase when it is store. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

The AWS account ID for the account in which to create the catalog object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#catalog_id GlueDatabase#catalog_id}

---

##### `databaseInput`<sup>Required</sup> <a name="databaseInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.databaseInput"></a>

```typescript
public readonly databaseInput: GlueDatabaseDatabaseInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a>

The metadata for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#database_input GlueDatabase#database_input}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database. For hive compatibility, this is folded to lowercase when it is store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#database_name GlueDatabase#database_name}

---

### GlueDatabaseDatabaseInput <a name="GlueDatabaseDatabaseInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.Initializer"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

const glueDatabaseDatabaseInput: glueDatabase.GlueDatabaseDatabaseInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>[]</code> | Creates a set of default permissions on the table for principals. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.description">description</a></code> | <code>string</code> | A description of the database. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.federatedDatabase">federatedDatabase</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a></code> | A FederatedDatabase structure that references an entity outside the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.locationUri">locationUri</a></code> | <code>string</code> | The location of the database (for example, an HDFS path). |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.name">name</a></code> | <code>string</code> | The name of the database. For hive compatibility, this is folded to lowercase when it is stored. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.parameters">parameters</a></code> | <code>string</code> | These key-value pairs define parameters and properties of the database. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.targetDatabase">targetDatabase</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a></code> | A DatabaseIdentifier structure that describes a target database for resource linking. |

---

##### `createTableDefaultPermissions`<sup>Optional</sup> <a name="createTableDefaultPermissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.createTableDefaultPermissions"></a>

```typescript
public readonly createTableDefaultPermissions: IResolvable | GlueDatabaseDatabaseInputCreateTableDefaultPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>[]

Creates a set of default permissions on the table for principals.

Used by AWS Lake Formation. Not used in the normal course of AWS Glue operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#create_table_default_permissions GlueDatabase#create_table_default_permissions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#description GlueDatabase#description}

---

##### `federatedDatabase`<sup>Optional</sup> <a name="federatedDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.federatedDatabase"></a>

```typescript
public readonly federatedDatabase: GlueDatabaseDatabaseInputFederatedDatabase;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a>

A FederatedDatabase structure that references an entity outside the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#federated_database GlueDatabase#federated_database}

---

##### `locationUri`<sup>Optional</sup> <a name="locationUri" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

The location of the database (for example, an HDFS path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#location_uri GlueDatabase#location_uri}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the database. For hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#name GlueDatabase#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

These key-value pairs define parameters and properties of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#parameters GlueDatabase#parameters}

---

##### `targetDatabase`<sup>Optional</sup> <a name="targetDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.targetDatabase"></a>

```typescript
public readonly targetDatabase: GlueDatabaseDatabaseInputTargetDatabase;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a>

A DatabaseIdentifier structure that describes a target database for resource linking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#target_database GlueDatabase#target_database}

---

### GlueDatabaseDatabaseInputCreateTableDefaultPermissions <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.Initializer"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

const glueDatabaseDatabaseInputCreateTableDefaultPermissions: glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.property.permissions">permissions</a></code> | <code>string[]</code> | The permissions that are granted to the principal. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a></code> | The principal who is granted permissions. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

The permissions that are granted to the principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#permissions GlueDatabase#permissions}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.property.principal"></a>

```typescript
public readonly principal: GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a>

The principal who is granted permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#principal GlueDatabase#principal}

---

### GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal.Initializer"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

const glueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal: glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | An identifier for the AWS Lake Formation principal. |

---

##### `dataLakePrincipalIdentifier`<sup>Optional</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

An identifier for the AWS Lake Formation principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#data_lake_principal_identifier GlueDatabase#data_lake_principal_identifier}

---

### GlueDatabaseDatabaseInputFederatedDatabase <a name="GlueDatabaseDatabaseInputFederatedDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.Initializer"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

const glueDatabaseDatabaseInputFederatedDatabase: glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.property.connectionName">connectionName</a></code> | <code>string</code> | The name of the connection to the external metastore. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.property.identifier">identifier</a></code> | <code>string</code> | A unique identifier for the federated database. |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

The name of the connection to the external metastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#connection_name GlueDatabase#connection_name}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

A unique identifier for the federated database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#identifier GlueDatabase#identifier}

---

### GlueDatabaseDatabaseInputTargetDatabase <a name="GlueDatabaseDatabaseInputTargetDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.Initializer"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

const glueDatabaseDatabaseInputTargetDatabase: glueDatabase.GlueDatabaseDatabaseInputTargetDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.catalogId">catalogId</a></code> | <code>string</code> | The ID of the Data Catalog in which the database resides. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the catalog database. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.region">region</a></code> | <code>string</code> | Region of the target database. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

The ID of the Data Catalog in which the database resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#catalog_id GlueDatabase#catalog_id}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the catalog database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#database_name GlueDatabase#database_name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region of the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_database#region GlueDatabase#region}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

new glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.get"></a>

```typescript
public get(index: number): GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueDatabaseDatabaseInputCreateTableDefaultPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>[]

---


### GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

new glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.putPrincipal"></a>

```typescript
public putPrincipal(value: GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a>

---

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string[];
```

- *Type:* string[]

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: IResolvable | GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueDatabaseDatabaseInputCreateTableDefaultPermissions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>

---


### GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

new glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">resetDataLakePrincipalIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataLakePrincipalIdentifier` <a name="resetDataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```typescript
public resetDataLakePrincipalIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">dataLakePrincipalIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="dataLakePrincipalIdentifierInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```typescript
public readonly dataLakePrincipalIdentifierInput: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifier`<sup>Required</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a>

---


### GlueDatabaseDatabaseInputFederatedDatabaseOutputReference <a name="GlueDatabaseDatabaseInputFederatedDatabaseOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

new glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resetIdentifier">resetIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resetConnectionName"></a>

```typescript
public resetConnectionName(): void
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueDatabaseDatabaseInputFederatedDatabase;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a>

---


### GlueDatabaseDatabaseInputOutputReference <a name="GlueDatabaseDatabaseInputOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

new glueDatabase.GlueDatabaseDatabaseInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putCreateTableDefaultPermissions">putCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putFederatedDatabase">putFederatedDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putTargetDatabase">putTargetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetCreateTableDefaultPermissions">resetCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetFederatedDatabase">resetFederatedDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetLocationUri">resetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetTargetDatabase">resetTargetDatabase</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCreateTableDefaultPermissions` <a name="putCreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putCreateTableDefaultPermissions"></a>

```typescript
public putCreateTableDefaultPermissions(value: IResolvable | GlueDatabaseDatabaseInputCreateTableDefaultPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putCreateTableDefaultPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>[]

---

##### `putFederatedDatabase` <a name="putFederatedDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putFederatedDatabase"></a>

```typescript
public putFederatedDatabase(value: GlueDatabaseDatabaseInputFederatedDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putFederatedDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a>

---

##### `putTargetDatabase` <a name="putTargetDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putTargetDatabase"></a>

```typescript
public putTargetDatabase(value: GlueDatabaseDatabaseInputTargetDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putTargetDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a>

---

##### `resetCreateTableDefaultPermissions` <a name="resetCreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetCreateTableDefaultPermissions"></a>

```typescript
public resetCreateTableDefaultPermissions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFederatedDatabase` <a name="resetFederatedDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetFederatedDatabase"></a>

```typescript
public resetFederatedDatabase(): void
```

##### `resetLocationUri` <a name="resetLocationUri" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetLocationUri"></a>

```typescript
public resetLocationUri(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTargetDatabase` <a name="resetTargetDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetTargetDatabase"></a>

```typescript
public resetTargetDatabase(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.federatedDatabase">federatedDatabase</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference">GlueDatabaseDatabaseInputFederatedDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.targetDatabase">targetDatabase</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference">GlueDatabaseDatabaseInputTargetDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.createTableDefaultPermissionsInput">createTableDefaultPermissionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.federatedDatabaseInput">federatedDatabaseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.locationUriInput">locationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.targetDatabaseInput">targetDatabaseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTableDefaultPermissions`<sup>Required</sup> <a name="createTableDefaultPermissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.createTableDefaultPermissions"></a>

```typescript
public readonly createTableDefaultPermissions: GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList</a>

---

##### `federatedDatabase`<sup>Required</sup> <a name="federatedDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.federatedDatabase"></a>

```typescript
public readonly federatedDatabase: GlueDatabaseDatabaseInputFederatedDatabaseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference">GlueDatabaseDatabaseInputFederatedDatabaseOutputReference</a>

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.targetDatabase"></a>

```typescript
public readonly targetDatabase: GlueDatabaseDatabaseInputTargetDatabaseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference">GlueDatabaseDatabaseInputTargetDatabaseOutputReference</a>

---

##### `createTableDefaultPermissionsInput`<sup>Optional</sup> <a name="createTableDefaultPermissionsInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.createTableDefaultPermissionsInput"></a>

```typescript
public readonly createTableDefaultPermissionsInput: IResolvable | GlueDatabaseDatabaseInputCreateTableDefaultPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions">GlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `federatedDatabaseInput`<sup>Optional</sup> <a name="federatedDatabaseInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.federatedDatabaseInput"></a>

```typescript
public readonly federatedDatabaseInput: IResolvable | GlueDatabaseDatabaseInputFederatedDatabase;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a>

---

##### `locationUriInput`<sup>Optional</sup> <a name="locationUriInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.locationUriInput"></a>

```typescript
public readonly locationUriInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `targetDatabaseInput`<sup>Optional</sup> <a name="targetDatabaseInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.targetDatabaseInput"></a>

```typescript
public readonly targetDatabaseInput: IResolvable | GlueDatabaseDatabaseInputTargetDatabase;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueDatabaseDatabaseInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a>

---


### GlueDatabaseDatabaseInputTargetDatabaseOutputReference <a name="GlueDatabaseDatabaseInputTargetDatabaseOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer"></a>

```typescript
import { glueDatabase } from '@cdktn/provider-awscc'

new glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueDatabaseDatabaseInputTargetDatabase;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a>

---



