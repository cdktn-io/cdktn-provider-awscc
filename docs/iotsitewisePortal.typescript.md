# `iotsitewisePortal` Submodule <a name="`iotsitewisePortal` Submodule" id="@cdktn/provider-awscc.iotsitewisePortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewisePortal <a name="IotsitewisePortal" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal awscc_iotsitewise_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer"></a>

```typescript
import { iotsitewisePortal } from '@cdktn/provider-awscc'

new iotsitewisePortal.IotsitewisePortal(scope: Construct, id: string, config: IotsitewisePortalConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig">IotsitewisePortalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig">IotsitewisePortalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms">putAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration">putPortalTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetNotificationSenderEmail">resetNotificationSenderEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalAuthMode">resetPortalAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalDescription">resetPortalDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalType">resetPortalType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalTypeConfiguration">resetPortalTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlarms` <a name="putAlarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms"></a>

```typescript
public putAlarms(value: IotsitewisePortalAlarms): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

---

##### `putPortalTypeConfiguration` <a name="putPortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration"></a>

```typescript
public putPortalTypeConfiguration(value: IResolvable | {[ key: string ]: IotsitewisePortalPortalTypeConfiguration}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>}

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags"></a>

```typescript
public putTags(value: IResolvable | IotsitewisePortalTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>[]

---

##### `resetAlarms` <a name="resetAlarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetAlarms"></a>

```typescript
public resetAlarms(): void
```

##### `resetNotificationSenderEmail` <a name="resetNotificationSenderEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetNotificationSenderEmail"></a>

```typescript
public resetNotificationSenderEmail(): void
```

##### `resetPortalAuthMode` <a name="resetPortalAuthMode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalAuthMode"></a>

```typescript
public resetPortalAuthMode(): void
```

##### `resetPortalDescription` <a name="resetPortalDescription" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalDescription"></a>

```typescript
public resetPortalDescription(): void
```

##### `resetPortalType` <a name="resetPortalType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalType"></a>

```typescript
public resetPortalType(): void
```

##### `resetPortalTypeConfiguration` <a name="resetPortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalTypeConfiguration"></a>

```typescript
public resetPortalTypeConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewisePortal resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct"></a>

```typescript
import { iotsitewisePortal } from '@cdktn/provider-awscc'

iotsitewisePortal.IotsitewisePortal.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement"></a>

```typescript
import { iotsitewisePortal } from '@cdktn/provider-awscc'

iotsitewisePortal.IotsitewisePortal.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource"></a>

```typescript
import { iotsitewisePortal } from '@cdktn/provider-awscc'

iotsitewisePortal.IotsitewisePortal.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport"></a>

```typescript
import { iotsitewisePortal } from '@cdktn/provider-awscc'

iotsitewisePortal.IotsitewisePortal.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotsitewisePortal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotsitewisePortal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotsitewisePortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewisePortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference">IotsitewisePortalAlarmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalArn">portalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalClientId">portalClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalId">portalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalStartUrl">portalStartUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfiguration">portalTypeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap">IotsitewisePortalPortalTypeConfigurationMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList">IotsitewisePortalTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarmsInput">alarmsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmailInput">notificationSenderEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthModeInput">portalAuthModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmailInput">portalContactEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescriptionInput">portalDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalNameInput">portalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfigurationInput">portalTypeConfigurationInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeInput">portalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmail">notificationSenderEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthMode">portalAuthMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmail">portalContactEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescription">portalDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalName">portalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalType">portalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarms"></a>

```typescript
public readonly alarms: IotsitewisePortalAlarmsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference">IotsitewisePortalAlarmsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `portalArn`<sup>Required</sup> <a name="portalArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalArn"></a>

```typescript
public readonly portalArn: string;
```

- *Type:* string

---

##### `portalClientId`<sup>Required</sup> <a name="portalClientId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalClientId"></a>

```typescript
public readonly portalClientId: string;
```

- *Type:* string

---

##### `portalId`<sup>Required</sup> <a name="portalId" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalId"></a>

```typescript
public readonly portalId: string;
```

- *Type:* string

---

##### `portalStartUrl`<sup>Required</sup> <a name="portalStartUrl" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalStartUrl"></a>

```typescript
public readonly portalStartUrl: string;
```

- *Type:* string

---

##### `portalTypeConfiguration`<sup>Required</sup> <a name="portalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfiguration"></a>

```typescript
public readonly portalTypeConfiguration: IotsitewisePortalPortalTypeConfigurationMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap">IotsitewisePortalPortalTypeConfigurationMap</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tags"></a>

```typescript
public readonly tags: IotsitewisePortalTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList">IotsitewisePortalTagsList</a>

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: IResolvable | IotsitewisePortalAlarms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

---

##### `notificationSenderEmailInput`<sup>Optional</sup> <a name="notificationSenderEmailInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmailInput"></a>

```typescript
public readonly notificationSenderEmailInput: string;
```

- *Type:* string

---

##### `portalAuthModeInput`<sup>Optional</sup> <a name="portalAuthModeInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthModeInput"></a>

```typescript
public readonly portalAuthModeInput: string;
```

- *Type:* string

---

##### `portalContactEmailInput`<sup>Optional</sup> <a name="portalContactEmailInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmailInput"></a>

```typescript
public readonly portalContactEmailInput: string;
```

- *Type:* string

---

##### `portalDescriptionInput`<sup>Optional</sup> <a name="portalDescriptionInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescriptionInput"></a>

```typescript
public readonly portalDescriptionInput: string;
```

- *Type:* string

---

##### `portalNameInput`<sup>Optional</sup> <a name="portalNameInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalNameInput"></a>

```typescript
public readonly portalNameInput: string;
```

- *Type:* string

---

##### `portalTypeConfigurationInput`<sup>Optional</sup> <a name="portalTypeConfigurationInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfigurationInput"></a>

```typescript
public readonly portalTypeConfigurationInput: IResolvable | {[ key: string ]: IotsitewisePortalPortalTypeConfiguration};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>}

---

##### `portalTypeInput`<sup>Optional</sup> <a name="portalTypeInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeInput"></a>

```typescript
public readonly portalTypeInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotsitewisePortalTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>[]

---

##### `notificationSenderEmail`<sup>Required</sup> <a name="notificationSenderEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmail"></a>

```typescript
public readonly notificationSenderEmail: string;
```

- *Type:* string

---

##### `portalAuthMode`<sup>Required</sup> <a name="portalAuthMode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthMode"></a>

```typescript
public readonly portalAuthMode: string;
```

- *Type:* string

---

##### `portalContactEmail`<sup>Required</sup> <a name="portalContactEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmail"></a>

```typescript
public readonly portalContactEmail: string;
```

- *Type:* string

---

##### `portalDescription`<sup>Required</sup> <a name="portalDescription" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescription"></a>

```typescript
public readonly portalDescription: string;
```

- *Type:* string

---

##### `portalName`<sup>Required</sup> <a name="portalName" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalName"></a>

```typescript
public readonly portalName: string;
```

- *Type:* string

---

##### `portalType`<sup>Required</sup> <a name="portalType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalType"></a>

```typescript
public readonly portalType: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewisePortalAlarms <a name="IotsitewisePortalAlarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.Initializer"></a>

```typescript
import { iotsitewisePortal } from '@cdktn/provider-awscc'

const iotsitewisePortalAlarms: iotsitewisePortal.IotsitewisePortalAlarms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.alarmRoleArn">alarmRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.notificationLambdaArn">notificationLambdaArn</a></code> | <code>string</code> | The ARN of the AWS Lambda function that manages alarm notifications. |

---

##### `alarmRoleArn`<sup>Optional</sup> <a name="alarmRoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.alarmRoleArn"></a>

```typescript
public readonly alarmRoleArn: string;
```

- *Type:* string

The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#alarm_role_arn IotsitewisePortal#alarm_role_arn}

---

##### `notificationLambdaArn`<sup>Optional</sup> <a name="notificationLambdaArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.notificationLambdaArn"></a>

```typescript
public readonly notificationLambdaArn: string;
```

- *Type:* string

The ARN of the AWS Lambda function that manages alarm notifications.

For more information, see Managing alarm notifications in the AWS IoT Events Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#notification_lambda_arn IotsitewisePortal#notification_lambda_arn}

---

### IotsitewisePortalConfig <a name="IotsitewisePortalConfig" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.Initializer"></a>

```typescript
import { iotsitewisePortal } from '@cdktn/provider-awscc'

const iotsitewisePortalConfig: iotsitewisePortal.IotsitewisePortalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalContactEmail">portalContactEmail</a></code> | <code>string</code> | The AWS administrator's contact email address. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalName">portalName</a></code> | <code>string</code> | A friendly name for the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.notificationSenderEmail">notificationSenderEmail</a></code> | <code>string</code> | The email address that sends alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalAuthMode">portalAuthMode</a></code> | <code>string</code> | The service to use to authenticate users to the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalDescription">portalDescription</a></code> | <code>string</code> | A description for the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalType">portalType</a></code> | <code>string</code> | The type of portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalTypeConfiguration">portalTypeConfiguration</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>}</code> | Map to associate detail of configuration related with a PortalType. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>[]</code> | A list of key-value pairs that contain metadata for the portal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `portalContactEmail`<sup>Required</sup> <a name="portalContactEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalContactEmail"></a>

```typescript
public readonly portalContactEmail: string;
```

- *Type:* string

The AWS administrator's contact email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_contact_email IotsitewisePortal#portal_contact_email}

---

##### `portalName`<sup>Required</sup> <a name="portalName" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalName"></a>

```typescript
public readonly portalName: string;
```

- *Type:* string

A friendly name for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_name IotsitewisePortal#portal_name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#role_arn IotsitewisePortal#role_arn}

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.alarms"></a>

```typescript
public readonly alarms: IotsitewisePortalAlarms;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal.

You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#alarms IotsitewisePortal#alarms}

---

##### `notificationSenderEmail`<sup>Optional</sup> <a name="notificationSenderEmail" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.notificationSenderEmail"></a>

```typescript
public readonly notificationSenderEmail: string;
```

- *Type:* string

The email address that sends alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#notification_sender_email IotsitewisePortal#notification_sender_email}

---

##### `portalAuthMode`<sup>Optional</sup> <a name="portalAuthMode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalAuthMode"></a>

```typescript
public readonly portalAuthMode: string;
```

- *Type:* string

The service to use to authenticate users to the portal.

Choose from SSO or IAM. You can't change this value after you create a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_auth_mode IotsitewisePortal#portal_auth_mode}

---

##### `portalDescription`<sup>Optional</sup> <a name="portalDescription" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalDescription"></a>

```typescript
public readonly portalDescription: string;
```

- *Type:* string

A description for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_description IotsitewisePortal#portal_description}

---

##### `portalType`<sup>Optional</sup> <a name="portalType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalType"></a>

```typescript
public readonly portalType: string;
```

- *Type:* string

The type of portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_type IotsitewisePortal#portal_type}

---

##### `portalTypeConfiguration`<sup>Optional</sup> <a name="portalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalTypeConfiguration"></a>

```typescript
public readonly portalTypeConfiguration: IResolvable | {[ key: string ]: IotsitewisePortalPortalTypeConfiguration};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>}

Map to associate detail of configuration related with a PortalType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_type_configuration IotsitewisePortal#portal_type_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotsitewisePortalTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>[]

A list of key-value pairs that contain metadata for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#tags IotsitewisePortal#tags}

---

### IotsitewisePortalPortalTypeConfiguration <a name="IotsitewisePortalPortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.Initializer"></a>

```typescript
import { iotsitewisePortal } from '@cdktn/provider-awscc'

const iotsitewisePortalPortalTypeConfiguration: iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.property.portalTools">portalTools</a></code> | <code>string[]</code> | List of enabled Tools for a certain portal. |

---

##### `portalTools`<sup>Optional</sup> <a name="portalTools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.property.portalTools"></a>

```typescript
public readonly portalTools: string[];
```

- *Type:* string[]

List of enabled Tools for a certain portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_tools IotsitewisePortal#portal_tools}

---

### IotsitewisePortalTags <a name="IotsitewisePortalTags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.Initializer"></a>

```typescript
import { iotsitewisePortal } from '@cdktn/provider-awscc'

const iotsitewisePortalTags: iotsitewisePortal.IotsitewisePortalTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#key IotsitewisePortal#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#value IotsitewisePortal#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#key IotsitewisePortal#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#value IotsitewisePortal#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewisePortalAlarmsOutputReference <a name="IotsitewisePortalAlarmsOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer"></a>

```typescript
import { iotsitewisePortal } from '@cdktn/provider-awscc'

new iotsitewisePortal.IotsitewisePortalAlarmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetAlarmRoleArn">resetAlarmRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetNotificationLambdaArn">resetNotificationLambdaArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarmRoleArn` <a name="resetAlarmRoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetAlarmRoleArn"></a>

```typescript
public resetAlarmRoleArn(): void
```

##### `resetNotificationLambdaArn` <a name="resetNotificationLambdaArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetNotificationLambdaArn"></a>

```typescript
public resetNotificationLambdaArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArnInput">alarmRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArnInput">notificationLambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArn">alarmRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArn">notificationLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmRoleArnInput`<sup>Optional</sup> <a name="alarmRoleArnInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArnInput"></a>

```typescript
public readonly alarmRoleArnInput: string;
```

- *Type:* string

---

##### `notificationLambdaArnInput`<sup>Optional</sup> <a name="notificationLambdaArnInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArnInput"></a>

```typescript
public readonly notificationLambdaArnInput: string;
```

- *Type:* string

---

##### `alarmRoleArn`<sup>Required</sup> <a name="alarmRoleArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArn"></a>

```typescript
public readonly alarmRoleArn: string;
```

- *Type:* string

---

##### `notificationLambdaArn`<sup>Required</sup> <a name="notificationLambdaArn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArn"></a>

```typescript
public readonly notificationLambdaArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewisePortalAlarms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

---


### IotsitewisePortalPortalTypeConfigurationMap <a name="IotsitewisePortalPortalTypeConfigurationMap" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer"></a>

```typescript
import { iotsitewisePortal } from '@cdktn/provider-awscc'

new iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get"></a>

```typescript
public get(key: string): IotsitewisePortalPortalTypeConfigurationOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: IotsitewisePortalPortalTypeConfiguration};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>}

---


### IotsitewisePortalPortalTypeConfigurationOutputReference <a name="IotsitewisePortalPortalTypeConfigurationOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer"></a>

```typescript
import { iotsitewisePortal } from '@cdktn/provider-awscc'

new iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resetPortalTools">resetPortalTools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPortalTools` <a name="resetPortalTools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resetPortalTools"></a>

```typescript
public resetPortalTools(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalToolsInput">portalToolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalTools">portalTools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portalToolsInput`<sup>Optional</sup> <a name="portalToolsInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalToolsInput"></a>

```typescript
public readonly portalToolsInput: string[];
```

- *Type:* string[]

---

##### `portalTools`<sup>Required</sup> <a name="portalTools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalTools"></a>

```typescript
public readonly portalTools: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewisePortalPortalTypeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>

---


### IotsitewisePortalTagsList <a name="IotsitewisePortalTagsList" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer"></a>

```typescript
import { iotsitewisePortal } from '@cdktn/provider-awscc'

new iotsitewisePortal.IotsitewisePortalTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get"></a>

```typescript
public get(index: number): IotsitewisePortalTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewisePortalTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>[]

---


### IotsitewisePortalTagsOutputReference <a name="IotsitewisePortalTagsOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer"></a>

```typescript
import { iotsitewisePortal } from '@cdktn/provider-awscc'

new iotsitewisePortal.IotsitewisePortalTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsitewisePortalTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>

---



