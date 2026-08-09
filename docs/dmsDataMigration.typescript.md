# `dmsDataMigration` Submodule <a name="`dmsDataMigration` Submodule" id="@cdktn/provider-awscc.dmsDataMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsDataMigration <a name="DmsDataMigration" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration awscc_dms_data_migration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer"></a>

```typescript
import { dmsDataMigration } from '@cdktn/provider-awscc'

new dmsDataMigration.DmsDataMigration(scope: Construct, id: string, config: DmsDataMigrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig">DmsDataMigrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig">DmsDataMigrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putDataMigrationSettings">putDataMigrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putSourceDataSettings">putSourceDataSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationIdentifier">resetDataMigrationIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationName">resetDataMigrationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationSettings">resetDataMigrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetSourceDataSettings">resetSourceDataSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataMigrationSettings` <a name="putDataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putDataMigrationSettings"></a>

```typescript
public putDataMigrationSettings(value: DmsDataMigrationDataMigrationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putDataMigrationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a>

---

##### `putSourceDataSettings` <a name="putSourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putSourceDataSettings"></a>

```typescript
public putSourceDataSettings(value: IResolvable | DmsDataMigrationSourceDataSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putSourceDataSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putTags"></a>

```typescript
public putTags(value: IResolvable | DmsDataMigrationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>[]

---

##### `resetDataMigrationIdentifier` <a name="resetDataMigrationIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationIdentifier"></a>

```typescript
public resetDataMigrationIdentifier(): void
```

##### `resetDataMigrationName` <a name="resetDataMigrationName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationName"></a>

```typescript
public resetDataMigrationName(): void
```

##### `resetDataMigrationSettings` <a name="resetDataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationSettings"></a>

```typescript
public resetDataMigrationSettings(): void
```

##### `resetSourceDataSettings` <a name="resetSourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetSourceDataSettings"></a>

```typescript
public resetSourceDataSettings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsDataMigration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isConstruct"></a>

```typescript
import { dmsDataMigration } from '@cdktn/provider-awscc'

dmsDataMigration.DmsDataMigration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformElement"></a>

```typescript
import { dmsDataMigration } from '@cdktn/provider-awscc'

dmsDataMigration.DmsDataMigration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformResource"></a>

```typescript
import { dmsDataMigration } from '@cdktn/provider-awscc'

dmsDataMigration.DmsDataMigration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport"></a>

```typescript
import { dmsDataMigration } from '@cdktn/provider-awscc'

dmsDataMigration.DmsDataMigration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DmsDataMigration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsDataMigration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsDataMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsDataMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationArn">dataMigrationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationCreateTime">dataMigrationCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettings">dataMigrationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference">DmsDataMigrationDataMigrationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettings">sourceDataSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList">DmsDataMigrationSourceDataSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList">DmsDataMigrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifierInput">dataMigrationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationNameInput">dataMigrationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettingsInput">dataMigrationSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationTypeInput">dataMigrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifierInput">migrationProjectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettingsInput">sourceDataSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifier">dataMigrationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationName">dataMigrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationType">dataMigrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifier">migrationProjectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataMigrationArn`<sup>Required</sup> <a name="dataMigrationArn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationArn"></a>

```typescript
public readonly dataMigrationArn: string;
```

- *Type:* string

---

##### `dataMigrationCreateTime`<sup>Required</sup> <a name="dataMigrationCreateTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationCreateTime"></a>

```typescript
public readonly dataMigrationCreateTime: string;
```

- *Type:* string

---

##### `dataMigrationSettings`<sup>Required</sup> <a name="dataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettings"></a>

```typescript
public readonly dataMigrationSettings: DmsDataMigrationDataMigrationSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference">DmsDataMigrationDataMigrationSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sourceDataSettings`<sup>Required</sup> <a name="sourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettings"></a>

```typescript
public readonly sourceDataSettings: DmsDataMigrationSourceDataSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList">DmsDataMigrationSourceDataSettingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tags"></a>

```typescript
public readonly tags: DmsDataMigrationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList">DmsDataMigrationTagsList</a>

---

##### `dataMigrationIdentifierInput`<sup>Optional</sup> <a name="dataMigrationIdentifierInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifierInput"></a>

```typescript
public readonly dataMigrationIdentifierInput: string;
```

- *Type:* string

---

##### `dataMigrationNameInput`<sup>Optional</sup> <a name="dataMigrationNameInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationNameInput"></a>

```typescript
public readonly dataMigrationNameInput: string;
```

- *Type:* string

---

##### `dataMigrationSettingsInput`<sup>Optional</sup> <a name="dataMigrationSettingsInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettingsInput"></a>

```typescript
public readonly dataMigrationSettingsInput: IResolvable | DmsDataMigrationDataMigrationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a>

---

##### `dataMigrationTypeInput`<sup>Optional</sup> <a name="dataMigrationTypeInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationTypeInput"></a>

```typescript
public readonly dataMigrationTypeInput: string;
```

- *Type:* string

---

##### `migrationProjectIdentifierInput`<sup>Optional</sup> <a name="migrationProjectIdentifierInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifierInput"></a>

```typescript
public readonly migrationProjectIdentifierInput: string;
```

- *Type:* string

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `sourceDataSettingsInput`<sup>Optional</sup> <a name="sourceDataSettingsInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettingsInput"></a>

```typescript
public readonly sourceDataSettingsInput: IResolvable | DmsDataMigrationSourceDataSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DmsDataMigrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>[]

---

##### `dataMigrationIdentifier`<sup>Required</sup> <a name="dataMigrationIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifier"></a>

```typescript
public readonly dataMigrationIdentifier: string;
```

- *Type:* string

---

##### `dataMigrationName`<sup>Required</sup> <a name="dataMigrationName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationName"></a>

```typescript
public readonly dataMigrationName: string;
```

- *Type:* string

---

##### `dataMigrationType`<sup>Required</sup> <a name="dataMigrationType" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationType"></a>

```typescript
public readonly dataMigrationType: string;
```

- *Type:* string

---

##### `migrationProjectIdentifier`<sup>Required</sup> <a name="migrationProjectIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifier"></a>

```typescript
public readonly migrationProjectIdentifier: string;
```

- *Type:* string

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsDataMigrationConfig <a name="DmsDataMigrationConfig" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.Initializer"></a>

```typescript
import { dmsDataMigration } from '@cdktn/provider-awscc'

const dmsDataMigrationConfig: dmsDataMigration.DmsDataMigrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationType">dataMigrationType</a></code> | <code>string</code> | The property describes the type of migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.migrationProjectIdentifier">migrationProjectIdentifier</a></code> | <code>string</code> | The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | The property describes Amazon Resource Name (ARN) of the service access role. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationIdentifier">dataMigrationIdentifier</a></code> | <code>string</code> | The property describes an ARN of the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationName">dataMigrationName</a></code> | <code>string</code> | The property describes a name to identify the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationSettings">dataMigrationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a></code> | The property describes the settings for the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.sourceDataSettings">sourceDataSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>[]</code> | The property describes the settings for the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataMigrationType`<sup>Required</sup> <a name="dataMigrationType" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationType"></a>

```typescript
public readonly dataMigrationType: string;
```

- *Type:* string

The property describes the type of migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#data_migration_type DmsDataMigration#data_migration_type}

---

##### `migrationProjectIdentifier`<sup>Required</sup> <a name="migrationProjectIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.migrationProjectIdentifier"></a>

```typescript
public readonly migrationProjectIdentifier: string;
```

- *Type:* string

The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#migration_project_identifier DmsDataMigration#migration_project_identifier}

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

The property describes Amazon Resource Name (ARN) of the service access role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#service_access_role_arn DmsDataMigration#service_access_role_arn}

---

##### `dataMigrationIdentifier`<sup>Optional</sup> <a name="dataMigrationIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationIdentifier"></a>

```typescript
public readonly dataMigrationIdentifier: string;
```

- *Type:* string

The property describes an ARN of the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#data_migration_identifier DmsDataMigration#data_migration_identifier}

---

##### `dataMigrationName`<sup>Optional</sup> <a name="dataMigrationName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationName"></a>

```typescript
public readonly dataMigrationName: string;
```

- *Type:* string

The property describes a name to identify the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#data_migration_name DmsDataMigration#data_migration_name}

---

##### `dataMigrationSettings`<sup>Optional</sup> <a name="dataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationSettings"></a>

```typescript
public readonly dataMigrationSettings: DmsDataMigrationDataMigrationSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a>

The property describes the settings for the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#data_migration_settings DmsDataMigration#data_migration_settings}

---

##### `sourceDataSettings`<sup>Optional</sup> <a name="sourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.sourceDataSettings"></a>

```typescript
public readonly sourceDataSettings: IResolvable | DmsDataMigrationSourceDataSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>[]

The property describes the settings for the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#source_data_settings DmsDataMigration#source_data_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DmsDataMigrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#tags DmsDataMigration#tags}

---

### DmsDataMigrationDataMigrationSettings <a name="DmsDataMigrationDataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.Initializer"></a>

```typescript
import { dmsDataMigration } from '@cdktn/provider-awscc'

const dmsDataMigrationDataMigrationSettings: dmsDataMigration.DmsDataMigrationDataMigrationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.cloudwatchLogsEnabled">cloudwatchLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | The property specifies whether to enable the CloudWatch log. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.numberOfJobs">numberOfJobs</a></code> | <code>number</code> | The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.selectionRules">selectionRules</a></code> | <code>string</code> | The property specifies the rules of selecting objects for data migration. |

---

##### `cloudwatchLogsEnabled`<sup>Optional</sup> <a name="cloudwatchLogsEnabled" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.cloudwatchLogsEnabled"></a>

```typescript
public readonly cloudwatchLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The property specifies whether to enable the CloudWatch log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#cloudwatch_logs_enabled DmsDataMigration#cloudwatch_logs_enabled}

---

##### `numberOfJobs`<sup>Optional</sup> <a name="numberOfJobs" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.numberOfJobs"></a>

```typescript
public readonly numberOfJobs: number;
```

- *Type:* number

The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#number_of_jobs DmsDataMigration#number_of_jobs}

---

##### `selectionRules`<sup>Optional</sup> <a name="selectionRules" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.selectionRules"></a>

```typescript
public readonly selectionRules: string;
```

- *Type:* string

The property specifies the rules of selecting objects for data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#selection_rules DmsDataMigration#selection_rules}

---

### DmsDataMigrationSourceDataSettings <a name="DmsDataMigrationSourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.Initializer"></a>

```typescript
import { dmsDataMigration } from '@cdktn/provider-awscc'

const dmsDataMigrationSourceDataSettings: dmsDataMigration.DmsDataMigrationSourceDataSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartPosition">cdcStartPosition</a></code> | <code>string</code> | The property is a point in the database engine's log that defines a time where you can begin CDC. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartTime">cdcStartTime</a></code> | <code>string</code> | The property indicates the start time for a change data capture (CDC) operation. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStopTime">cdcStopTime</a></code> | <code>string</code> | The property indicates the stop time for a change data capture (CDC) operation. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.slotName">slotName</a></code> | <code>string</code> | The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance. |

---

##### `cdcStartPosition`<sup>Optional</sup> <a name="cdcStartPosition" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartPosition"></a>

```typescript
public readonly cdcStartPosition: string;
```

- *Type:* string

The property is a point in the database engine's log that defines a time where you can begin CDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#cdc_start_position DmsDataMigration#cdc_start_position}

---

##### `cdcStartTime`<sup>Optional</sup> <a name="cdcStartTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartTime"></a>

```typescript
public readonly cdcStartTime: string;
```

- *Type:* string

The property indicates the start time for a change data capture (CDC) operation.

The value is server time in UTC format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#cdc_start_time DmsDataMigration#cdc_start_time}

---

##### `cdcStopTime`<sup>Optional</sup> <a name="cdcStopTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStopTime"></a>

```typescript
public readonly cdcStopTime: string;
```

- *Type:* string

The property indicates the stop time for a change data capture (CDC) operation.

The value is server time in UTC format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#cdc_stop_time DmsDataMigration#cdc_stop_time}

---

##### `slotName`<sup>Optional</sup> <a name="slotName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.slotName"></a>

```typescript
public readonly slotName: string;
```

- *Type:* string

The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#slot_name DmsDataMigration#slot_name}

---

### DmsDataMigrationTags <a name="DmsDataMigrationTags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.Initializer"></a>

```typescript
import { dmsDataMigration } from '@cdktn/provider-awscc'

const dmsDataMigrationTags: dmsDataMigration.DmsDataMigrationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#key DmsDataMigration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_migration#value DmsDataMigration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsDataMigrationDataMigrationSettingsOutputReference <a name="DmsDataMigrationDataMigrationSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer"></a>

```typescript
import { dmsDataMigration } from '@cdktn/provider-awscc'

new dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetCloudwatchLogsEnabled">resetCloudwatchLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetNumberOfJobs">resetNumberOfJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetSelectionRules">resetSelectionRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudwatchLogsEnabled` <a name="resetCloudwatchLogsEnabled" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetCloudwatchLogsEnabled"></a>

```typescript
public resetCloudwatchLogsEnabled(): void
```

##### `resetNumberOfJobs` <a name="resetNumberOfJobs" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetNumberOfJobs"></a>

```typescript
public resetNumberOfJobs(): void
```

##### `resetSelectionRules` <a name="resetSelectionRules" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetSelectionRules"></a>

```typescript
public resetSelectionRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabledInput">cloudwatchLogsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobsInput">numberOfJobsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRulesInput">selectionRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabled">cloudwatchLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobs">numberOfJobs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRules">selectionRules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogsEnabledInput`<sup>Optional</sup> <a name="cloudwatchLogsEnabledInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabledInput"></a>

```typescript
public readonly cloudwatchLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberOfJobsInput`<sup>Optional</sup> <a name="numberOfJobsInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobsInput"></a>

```typescript
public readonly numberOfJobsInput: number;
```

- *Type:* number

---

##### `selectionRulesInput`<sup>Optional</sup> <a name="selectionRulesInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRulesInput"></a>

```typescript
public readonly selectionRulesInput: string;
```

- *Type:* string

---

##### `cloudwatchLogsEnabled`<sup>Required</sup> <a name="cloudwatchLogsEnabled" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabled"></a>

```typescript
public readonly cloudwatchLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberOfJobs`<sup>Required</sup> <a name="numberOfJobs" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobs"></a>

```typescript
public readonly numberOfJobs: number;
```

- *Type:* number

---

##### `selectionRules`<sup>Required</sup> <a name="selectionRules" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRules"></a>

```typescript
public readonly selectionRules: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataMigrationDataMigrationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a>

---


### DmsDataMigrationSourceDataSettingsList <a name="DmsDataMigrationSourceDataSettingsList" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer"></a>

```typescript
import { dmsDataMigration } from '@cdktn/provider-awscc'

new dmsDataMigration.DmsDataMigrationSourceDataSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.get"></a>

```typescript
public get(index: number): DmsDataMigrationSourceDataSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataMigrationSourceDataSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>[]

---


### DmsDataMigrationSourceDataSettingsOutputReference <a name="DmsDataMigrationSourceDataSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer"></a>

```typescript
import { dmsDataMigration } from '@cdktn/provider-awscc'

new dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartPosition">resetCdcStartPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartTime">resetCdcStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStopTime">resetCdcStopTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetSlotName">resetSlotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCdcStartPosition` <a name="resetCdcStartPosition" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartPosition"></a>

```typescript
public resetCdcStartPosition(): void
```

##### `resetCdcStartTime` <a name="resetCdcStartTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartTime"></a>

```typescript
public resetCdcStartTime(): void
```

##### `resetCdcStopTime` <a name="resetCdcStopTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStopTime"></a>

```typescript
public resetCdcStopTime(): void
```

##### `resetSlotName` <a name="resetSlotName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetSlotName"></a>

```typescript
public resetSlotName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPositionInput">cdcStartPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTimeInput">cdcStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTimeInput">cdcStopTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotNameInput">slotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPosition">cdcStartPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTime">cdcStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTime">cdcStopTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotName">slotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cdcStartPositionInput`<sup>Optional</sup> <a name="cdcStartPositionInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPositionInput"></a>

```typescript
public readonly cdcStartPositionInput: string;
```

- *Type:* string

---

##### `cdcStartTimeInput`<sup>Optional</sup> <a name="cdcStartTimeInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTimeInput"></a>

```typescript
public readonly cdcStartTimeInput: string;
```

- *Type:* string

---

##### `cdcStopTimeInput`<sup>Optional</sup> <a name="cdcStopTimeInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTimeInput"></a>

```typescript
public readonly cdcStopTimeInput: string;
```

- *Type:* string

---

##### `slotNameInput`<sup>Optional</sup> <a name="slotNameInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotNameInput"></a>

```typescript
public readonly slotNameInput: string;
```

- *Type:* string

---

##### `cdcStartPosition`<sup>Required</sup> <a name="cdcStartPosition" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPosition"></a>

```typescript
public readonly cdcStartPosition: string;
```

- *Type:* string

---

##### `cdcStartTime`<sup>Required</sup> <a name="cdcStartTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTime"></a>

```typescript
public readonly cdcStartTime: string;
```

- *Type:* string

---

##### `cdcStopTime`<sup>Required</sup> <a name="cdcStopTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTime"></a>

```typescript
public readonly cdcStopTime: string;
```

- *Type:* string

---

##### `slotName`<sup>Required</sup> <a name="slotName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotName"></a>

```typescript
public readonly slotName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataMigrationSourceDataSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings">DmsDataMigrationSourceDataSettings</a>

---


### DmsDataMigrationTagsList <a name="DmsDataMigrationTagsList" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer"></a>

```typescript
import { dmsDataMigration } from '@cdktn/provider-awscc'

new dmsDataMigration.DmsDataMigrationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.get"></a>

```typescript
public get(index: number): DmsDataMigrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataMigrationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>[]

---


### DmsDataMigrationTagsOutputReference <a name="DmsDataMigrationTagsOutputReference" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer"></a>

```typescript
import { dmsDataMigration } from '@cdktn/provider-awscc'

new dmsDataMigration.DmsDataMigrationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsDataMigrationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags">DmsDataMigrationTags</a>

---



