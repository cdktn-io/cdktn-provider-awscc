# `lightsailDatabase` Submodule <a name="`lightsailDatabase` Submodule" id="@cdktn/provider-awscc.lightsailDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDatabase <a name="LightsailDatabase" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database awscc_lightsail_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer"></a>

```typescript
import { lightsailDatabase } from '@cdktn/provider-awscc'

new lightsailDatabase.LightsailDatabase(scope: Construct, id: string, config: LightsailDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig">LightsailDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig">LightsailDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putRelationalDatabaseParameters">putRelationalDatabaseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetBackupRetention">resetBackupRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetCaCertificateIdentifier">resetCaCertificateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetMasterUserPassword">resetMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredBackupWindow">resetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRelationalDatabaseParameters">resetRelationalDatabaseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRotateMasterUserPassword">resetRotateMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRelationalDatabaseParameters` <a name="putRelationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putRelationalDatabaseParameters"></a>

```typescript
public putRelationalDatabaseParameters(value: IResolvable | LightsailDatabaseRelationalDatabaseParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putRelationalDatabaseParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putTags"></a>

```typescript
public putTags(value: IResolvable | LightsailDatabaseTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>[]

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetBackupRetention` <a name="resetBackupRetention" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetBackupRetention"></a>

```typescript
public resetBackupRetention(): void
```

##### `resetCaCertificateIdentifier` <a name="resetCaCertificateIdentifier" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetCaCertificateIdentifier"></a>

```typescript
public resetCaCertificateIdentifier(): void
```

##### `resetMasterUserPassword` <a name="resetMasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetMasterUserPassword"></a>

```typescript
public resetMasterUserPassword(): void
```

##### `resetPreferredBackupWindow` <a name="resetPreferredBackupWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredBackupWindow"></a>

```typescript
public resetPreferredBackupWindow(): void
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPreferredMaintenanceWindow"></a>

```typescript
public resetPreferredMaintenanceWindow(): void
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetPubliclyAccessible"></a>

```typescript
public resetPubliclyAccessible(): void
```

##### `resetRelationalDatabaseParameters` <a name="resetRelationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRelationalDatabaseParameters"></a>

```typescript
public resetRelationalDatabaseParameters(): void
```

##### `resetRotateMasterUserPassword` <a name="resetRotateMasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetRotateMasterUserPassword"></a>

```typescript
public resetRotateMasterUserPassword(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isConstruct"></a>

```typescript
import { lightsailDatabase } from '@cdktn/provider-awscc'

lightsailDatabase.LightsailDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformElement"></a>

```typescript
import { lightsailDatabase } from '@cdktn/provider-awscc'

lightsailDatabase.LightsailDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformResource"></a>

```typescript
import { lightsailDatabase } from '@cdktn/provider-awscc'

lightsailDatabase.LightsailDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport"></a>

```typescript
import { lightsailDatabase } from '@cdktn/provider-awscc'

lightsailDatabase.LightsailDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LightsailDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LightsailDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.databaseArn">databaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParameters">relationalDatabaseParameters</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList">LightsailDatabaseRelationalDatabaseParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList">LightsailDatabaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetentionInput">backupRetentionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifierInput">caCertificateIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseNameInput">masterDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsernameInput">masterUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPasswordInput">masterUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindowInput">preferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintIdInput">relationalDatabaseBlueprintIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleIdInput">relationalDatabaseBundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseNameInput">relationalDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParametersInput">relationalDatabaseParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPasswordInput">rotateMasterUserPasswordInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetention">backupRetention</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifier">caCertificateIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseName">masterDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsername">masterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPassword">masterUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintId">relationalDatabaseBlueprintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleId">relationalDatabaseBundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseName">relationalDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPassword">rotateMasterUserPassword</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `databaseArn`<sup>Required</sup> <a name="databaseArn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.databaseArn"></a>

```typescript
public readonly databaseArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `relationalDatabaseParameters`<sup>Required</sup> <a name="relationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParameters"></a>

```typescript
public readonly relationalDatabaseParameters: LightsailDatabaseRelationalDatabaseParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList">LightsailDatabaseRelationalDatabaseParametersList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tags"></a>

```typescript
public readonly tags: LightsailDatabaseTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList">LightsailDatabaseTagsList</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `backupRetentionInput`<sup>Optional</sup> <a name="backupRetentionInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetentionInput"></a>

```typescript
public readonly backupRetentionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `caCertificateIdentifierInput`<sup>Optional</sup> <a name="caCertificateIdentifierInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifierInput"></a>

```typescript
public readonly caCertificateIdentifierInput: string;
```

- *Type:* string

---

##### `masterDatabaseNameInput`<sup>Optional</sup> <a name="masterDatabaseNameInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseNameInput"></a>

```typescript
public readonly masterDatabaseNameInput: string;
```

- *Type:* string

---

##### `masterUsernameInput`<sup>Optional</sup> <a name="masterUsernameInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsernameInput"></a>

```typescript
public readonly masterUsernameInput: string;
```

- *Type:* string

---

##### `masterUserPasswordInput`<sup>Optional</sup> <a name="masterUserPasswordInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPasswordInput"></a>

```typescript
public readonly masterUserPasswordInput: string;
```

- *Type:* string

---

##### `preferredBackupWindowInput`<sup>Optional</sup> <a name="preferredBackupWindowInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindowInput"></a>

```typescript
public readonly preferredBackupWindowInput: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindowInput"></a>

```typescript
public readonly preferredMaintenanceWindowInput: string;
```

- *Type:* string

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessibleInput"></a>

```typescript
public readonly publiclyAccessibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `relationalDatabaseBlueprintIdInput`<sup>Optional</sup> <a name="relationalDatabaseBlueprintIdInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintIdInput"></a>

```typescript
public readonly relationalDatabaseBlueprintIdInput: string;
```

- *Type:* string

---

##### `relationalDatabaseBundleIdInput`<sup>Optional</sup> <a name="relationalDatabaseBundleIdInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleIdInput"></a>

```typescript
public readonly relationalDatabaseBundleIdInput: string;
```

- *Type:* string

---

##### `relationalDatabaseNameInput`<sup>Optional</sup> <a name="relationalDatabaseNameInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseNameInput"></a>

```typescript
public readonly relationalDatabaseNameInput: string;
```

- *Type:* string

---

##### `relationalDatabaseParametersInput`<sup>Optional</sup> <a name="relationalDatabaseParametersInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseParametersInput"></a>

```typescript
public readonly relationalDatabaseParametersInput: IResolvable | LightsailDatabaseRelationalDatabaseParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>[]

---

##### `rotateMasterUserPasswordInput`<sup>Optional</sup> <a name="rotateMasterUserPasswordInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPasswordInput"></a>

```typescript
public readonly rotateMasterUserPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LightsailDatabaseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `backupRetention`<sup>Required</sup> <a name="backupRetention" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.backupRetention"></a>

```typescript
public readonly backupRetention: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="caCertificateIdentifier" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifier"></a>

```typescript
public readonly caCertificateIdentifier: string;
```

- *Type:* string

---

##### `masterDatabaseName`<sup>Required</sup> <a name="masterDatabaseName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterDatabaseName"></a>

```typescript
public readonly masterDatabaseName: string;
```

- *Type:* string

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUsername"></a>

```typescript
public readonly masterUsername: string;
```

- *Type:* string

---

##### `masterUserPassword`<sup>Required</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.masterUserPassword"></a>

```typescript
public readonly masterUserPassword: string;
```

- *Type:* string

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `relationalDatabaseBlueprintId`<sup>Required</sup> <a name="relationalDatabaseBlueprintId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBlueprintId"></a>

```typescript
public readonly relationalDatabaseBlueprintId: string;
```

- *Type:* string

---

##### `relationalDatabaseBundleId`<sup>Required</sup> <a name="relationalDatabaseBundleId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseBundleId"></a>

```typescript
public readonly relationalDatabaseBundleId: string;
```

- *Type:* string

---

##### `relationalDatabaseName`<sup>Required</sup> <a name="relationalDatabaseName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.relationalDatabaseName"></a>

```typescript
public readonly relationalDatabaseName: string;
```

- *Type:* string

---

##### `rotateMasterUserPassword`<sup>Required</sup> <a name="rotateMasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.rotateMasterUserPassword"></a>

```typescript
public readonly rotateMasterUserPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDatabaseConfig <a name="LightsailDatabaseConfig" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.Initializer"></a>

```typescript
import { lightsailDatabase } from '@cdktn/provider-awscc'

const lightsailDatabaseConfig: lightsailDatabase.LightsailDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterDatabaseName">masterDatabaseName</a></code> | <code>string</code> | The name of the database to create when the Lightsail database resource is created. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUsername">masterUsername</a></code> | <code>string</code> | The name for the master user. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBlueprintId">relationalDatabaseBlueprintId</a></code> | <code>string</code> | The blueprint ID for your new database. A blueprint describes the major engine version of a database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBundleId">relationalDatabaseBundleId</a></code> | <code>string</code> | The bundle ID for your new database. A bundle describes the performance specifications for your database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseName">relationalDatabaseName</a></code> | <code>string</code> | The name to use for your new Lightsail database resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.backupRetention">backupRetention</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, enables automated backup retention for your database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.caCertificateIdentifier">caCertificateIdentifier</a></code> | <code>string</code> | Indicates the certificate that needs to be associated with the database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUserPassword">masterUserPassword</a></code> | <code>string</code> | The password for the master user. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | The daily time range during which automated backups are created for your new database if automated backups are enabled. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | The weekly time range during which system maintenance can occur on your new database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies the accessibility options for your new database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseParameters">relationalDatabaseParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>[]</code> | Update one or more parameters of the relational database. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.rotateMasterUserPassword">rotateMasterUserPassword</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, the master user password is changed to a new strong password generated by Lightsail. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `masterDatabaseName`<sup>Required</sup> <a name="masterDatabaseName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterDatabaseName"></a>

```typescript
public readonly masterDatabaseName: string;
```

- *Type:* string

The name of the database to create when the Lightsail database resource is created.

For MySQL, if this parameter isn't specified, no database is created in the database resource. For PostgreSQL, if this parameter isn't specified, a database named postgres is created in the database resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#master_database_name LightsailDatabase#master_database_name}

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUsername"></a>

```typescript
public readonly masterUsername: string;
```

- *Type:* string

The name for the master user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#master_username LightsailDatabase#master_username}

---

##### `relationalDatabaseBlueprintId`<sup>Required</sup> <a name="relationalDatabaseBlueprintId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBlueprintId"></a>

```typescript
public readonly relationalDatabaseBlueprintId: string;
```

- *Type:* string

The blueprint ID for your new database. A blueprint describes the major engine version of a database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#relational_database_blueprint_id LightsailDatabase#relational_database_blueprint_id}

---

##### `relationalDatabaseBundleId`<sup>Required</sup> <a name="relationalDatabaseBundleId" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseBundleId"></a>

```typescript
public readonly relationalDatabaseBundleId: string;
```

- *Type:* string

The bundle ID for your new database. A bundle describes the performance specifications for your database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#relational_database_bundle_id LightsailDatabase#relational_database_bundle_id}

---

##### `relationalDatabaseName`<sup>Required</sup> <a name="relationalDatabaseName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseName"></a>

```typescript
public readonly relationalDatabaseName: string;
```

- *Type:* string

The name to use for your new Lightsail database resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#availability_zone LightsailDatabase#availability_zone}

---

##### `backupRetention`<sup>Optional</sup> <a name="backupRetention" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.backupRetention"></a>

```typescript
public readonly backupRetention: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, enables automated backup retention for your database.

Updates are applied during the next maintenance window because this can result in an outage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#backup_retention LightsailDatabase#backup_retention}

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="caCertificateIdentifier" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.caCertificateIdentifier"></a>

```typescript
public readonly caCertificateIdentifier: string;
```

- *Type:* string

Indicates the certificate that needs to be associated with the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#ca_certificate_identifier LightsailDatabase#ca_certificate_identifier}

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.masterUserPassword"></a>

```typescript
public readonly masterUserPassword: string;
```

- *Type:* string

The password for the master user.

The password can include any printable ASCII character except "/", """, or "@". It cannot contain spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#master_user_password LightsailDatabase#master_user_password}

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

The daily time range during which automated backups are created for your new database if automated backups are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

The weekly time range during which system maintenance can occur on your new database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies the accessibility options for your new database.

A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}

---

##### `relationalDatabaseParameters`<sup>Optional</sup> <a name="relationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseParameters"></a>

```typescript
public readonly relationalDatabaseParameters: IResolvable | LightsailDatabaseRelationalDatabaseParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>[]

Update one or more parameters of the relational database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#relational_database_parameters LightsailDatabase#relational_database_parameters}

---

##### `rotateMasterUserPassword`<sup>Optional</sup> <a name="rotateMasterUserPassword" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.rotateMasterUserPassword"></a>

```typescript
public readonly rotateMasterUserPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, the master user password is changed to a new strong password generated by Lightsail.

Use the get relational database master user password operation to get the new password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#rotate_master_user_password LightsailDatabase#rotate_master_user_password}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LightsailDatabaseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#tags LightsailDatabase#tags}

---

### LightsailDatabaseRelationalDatabaseParameters <a name="LightsailDatabaseRelationalDatabaseParameters" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.Initializer"></a>

```typescript
import { lightsailDatabase } from '@cdktn/provider-awscc'

const lightsailDatabaseRelationalDatabaseParameters: lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.allowedValues">allowedValues</a></code> | <code>string</code> | Specifies the valid range of values for the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyMethod">applyMethod</a></code> | <code>string</code> | Indicates when parameter updates are applied. Can be immediate or pending-reboot. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyType">applyType</a></code> | <code>string</code> | Specifies the engine-specific parameter type. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.dataType">dataType</a></code> | <code>string</code> | Specifies the valid data type for the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.description">description</a></code> | <code>string</code> | Provides a description of the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.isModifiable">isModifiable</a></code> | <code>boolean \| cdktn.IResolvable</code> | A Boolean value indicating whether the parameter can be modified. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterName">parameterName</a></code> | <code>string</code> | Specifies the name of the parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterValue">parameterValue</a></code> | <code>string</code> | Specifies the value of the parameter. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.allowedValues"></a>

```typescript
public readonly allowedValues: string;
```

- *Type:* string

Specifies the valid range of values for the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#allowed_values LightsailDatabase#allowed_values}

---

##### `applyMethod`<sup>Optional</sup> <a name="applyMethod" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyMethod"></a>

```typescript
public readonly applyMethod: string;
```

- *Type:* string

Indicates when parameter updates are applied. Can be immediate or pending-reboot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#apply_method LightsailDatabase#apply_method}

---

##### `applyType`<sup>Optional</sup> <a name="applyType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.applyType"></a>

```typescript
public readonly applyType: string;
```

- *Type:* string

Specifies the engine-specific parameter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#apply_type LightsailDatabase#apply_type}

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Specifies the valid data type for the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#data_type LightsailDatabase#data_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Provides a description of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#description LightsailDatabase#description}

---

##### `isModifiable`<sup>Optional</sup> <a name="isModifiable" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.isModifiable"></a>

```typescript
public readonly isModifiable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A Boolean value indicating whether the parameter can be modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#is_modifiable LightsailDatabase#is_modifiable}

---

##### `parameterName`<sup>Optional</sup> <a name="parameterName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

Specifies the name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#parameter_name LightsailDatabase#parameter_name}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

Specifies the value of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#parameter_value LightsailDatabase#parameter_value}

---

### LightsailDatabaseTags <a name="LightsailDatabaseTags" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.Initializer"></a>

```typescript
import { lightsailDatabase } from '@cdktn/provider-awscc'

const lightsailDatabaseTags: lightsailDatabase.LightsailDatabaseTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#key LightsailDatabase#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_database#value LightsailDatabase#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailDatabaseRelationalDatabaseParametersList <a name="LightsailDatabaseRelationalDatabaseParametersList" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer"></a>

```typescript
import { lightsailDatabase } from '@cdktn/provider-awscc'

new lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.get"></a>

```typescript
public get(index: number): LightsailDatabaseRelationalDatabaseParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDatabaseRelationalDatabaseParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>[]

---


### LightsailDatabaseRelationalDatabaseParametersOutputReference <a name="LightsailDatabaseRelationalDatabaseParametersOutputReference" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer"></a>

```typescript
import { lightsailDatabase } from '@cdktn/provider-awscc'

new lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyMethod">resetApplyMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyType">resetApplyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetIsModifiable">resetIsModifiable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterName">resetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetAllowedValues"></a>

```typescript
public resetAllowedValues(): void
```

##### `resetApplyMethod` <a name="resetApplyMethod" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyMethod"></a>

```typescript
public resetApplyMethod(): void
```

##### `resetApplyType` <a name="resetApplyType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetApplyType"></a>

```typescript
public resetApplyType(): void
```

##### `resetDataType` <a name="resetDataType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDataType"></a>

```typescript
public resetDataType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIsModifiable` <a name="resetIsModifiable" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetIsModifiable"></a>

```typescript
public resetIsModifiable(): void
```

##### `resetParameterName` <a name="resetParameterName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterName"></a>

```typescript
public resetParameterName(): void
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.resetParameterValue"></a>

```typescript
public resetParameterValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethodInput">applyMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyTypeInput">applyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiableInput">isModifiableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValues">allowedValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethod">applyMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyType">applyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiable">isModifiable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValuesInput"></a>

```typescript
public readonly allowedValuesInput: string;
```

- *Type:* string

---

##### `applyMethodInput`<sup>Optional</sup> <a name="applyMethodInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethodInput"></a>

```typescript
public readonly applyMethodInput: string;
```

- *Type:* string

---

##### `applyTypeInput`<sup>Optional</sup> <a name="applyTypeInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyTypeInput"></a>

```typescript
public readonly applyTypeInput: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `isModifiableInput`<sup>Optional</sup> <a name="isModifiableInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiableInput"></a>

```typescript
public readonly isModifiableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string;
```

- *Type:* string

---

##### `applyMethod`<sup>Required</sup> <a name="applyMethod" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyMethod"></a>

```typescript
public readonly applyMethod: string;
```

- *Type:* string

---

##### `applyType`<sup>Required</sup> <a name="applyType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.applyType"></a>

```typescript
public readonly applyType: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isModifiable`<sup>Required</sup> <a name="isModifiable" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.isModifiable"></a>

```typescript
public readonly isModifiable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDatabaseRelationalDatabaseParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseRelationalDatabaseParameters">LightsailDatabaseRelationalDatabaseParameters</a>

---


### LightsailDatabaseTagsList <a name="LightsailDatabaseTagsList" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer"></a>

```typescript
import { lightsailDatabase } from '@cdktn/provider-awscc'

new lightsailDatabase.LightsailDatabaseTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.get"></a>

```typescript
public get(index: number): LightsailDatabaseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDatabaseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>[]

---


### LightsailDatabaseTagsOutputReference <a name="LightsailDatabaseTagsOutputReference" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer"></a>

```typescript
import { lightsailDatabase } from '@cdktn/provider-awscc'

new lightsailDatabase.LightsailDatabaseTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDatabaseTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDatabase.LightsailDatabaseTags">LightsailDatabaseTags</a>

---



