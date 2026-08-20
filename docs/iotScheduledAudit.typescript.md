# `iotScheduledAudit` Submodule <a name="`iotScheduledAudit` Submodule" id="@cdktn/provider-awscc.iotScheduledAudit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotScheduledAudit <a name="IotScheduledAudit" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_scheduled_audit awscc_iot_scheduled_audit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.Initializer"></a>

```typescript
import { iotScheduledAudit } from '@cdktn/provider-awscc'

new iotScheduledAudit.IotScheduledAudit(scope: Construct, id: string, config: IotScheduledAuditConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig">IotScheduledAuditConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig">IotScheduledAuditConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.resetDayOfMonth">resetDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.resetScheduledAuditName">resetScheduledAuditName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.putTags"></a>

```typescript
public putTags(value: IResolvable | IotScheduledAuditTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags">IotScheduledAuditTags</a>[]

---

##### `resetDayOfMonth` <a name="resetDayOfMonth" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.resetDayOfMonth"></a>

```typescript
public resetDayOfMonth(): void
```

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.resetDayOfWeek"></a>

```typescript
public resetDayOfWeek(): void
```

##### `resetScheduledAuditName` <a name="resetScheduledAuditName" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.resetScheduledAuditName"></a>

```typescript
public resetScheduledAuditName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotScheduledAudit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.isConstruct"></a>

```typescript
import { iotScheduledAudit } from '@cdktn/provider-awscc'

iotScheduledAudit.IotScheduledAudit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.isTerraformElement"></a>

```typescript
import { iotScheduledAudit } from '@cdktn/provider-awscc'

iotScheduledAudit.IotScheduledAudit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.isTerraformResource"></a>

```typescript
import { iotScheduledAudit } from '@cdktn/provider-awscc'

iotScheduledAudit.IotScheduledAudit.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.generateConfigForImport"></a>

```typescript
import { iotScheduledAudit } from '@cdktn/provider-awscc'

iotScheduledAudit.IotScheduledAudit.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotScheduledAudit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotScheduledAudit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotScheduledAudit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_scheduled_audit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotScheduledAudit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.scheduledAuditArn">scheduledAuditArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList">IotScheduledAuditTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.dayOfMonthInput">dayOfMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.scheduledAuditNameInput">scheduledAuditNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags">IotScheduledAuditTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.targetCheckNamesInput">targetCheckNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.dayOfMonth">dayOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.scheduledAuditName">scheduledAuditName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.targetCheckNames">targetCheckNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scheduledAuditArn`<sup>Required</sup> <a name="scheduledAuditArn" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.scheduledAuditArn"></a>

```typescript
public readonly scheduledAuditArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.tags"></a>

```typescript
public readonly tags: IotScheduledAuditTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList">IotScheduledAuditTagsList</a>

---

##### `dayOfMonthInput`<sup>Optional</sup> <a name="dayOfMonthInput" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.dayOfMonthInput"></a>

```typescript
public readonly dayOfMonthInput: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `scheduledAuditNameInput`<sup>Optional</sup> <a name="scheduledAuditNameInput" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.scheduledAuditNameInput"></a>

```typescript
public readonly scheduledAuditNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotScheduledAuditTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags">IotScheduledAuditTags</a>[]

---

##### `targetCheckNamesInput`<sup>Optional</sup> <a name="targetCheckNamesInput" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.targetCheckNamesInput"></a>

```typescript
public readonly targetCheckNamesInput: string[];
```

- *Type:* string[]

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `scheduledAuditName`<sup>Required</sup> <a name="scheduledAuditName" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.scheduledAuditName"></a>

```typescript
public readonly scheduledAuditName: string;
```

- *Type:* string

---

##### `targetCheckNames`<sup>Required</sup> <a name="targetCheckNames" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.targetCheckNames"></a>

```typescript
public readonly targetCheckNames: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAudit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotScheduledAuditConfig <a name="IotScheduledAuditConfig" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.Initializer"></a>

```typescript
import { iotScheduledAudit } from '@cdktn/provider-awscc'

const iotScheduledAuditConfig: iotScheduledAudit.IotScheduledAuditConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.frequency">frequency</a></code> | <code>string</code> | How often the scheduled audit takes place. Can be one of DAILY, WEEKLY, BIWEEKLY, or MONTHLY. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.targetCheckNames">targetCheckNames</a></code> | <code>string[]</code> | Which checks are performed during the scheduled audit. Checks must be enabled for your account. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.dayOfMonth">dayOfMonth</a></code> | <code>string</code> | The day of the month on which the scheduled audit takes place. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | The day of the week on which the scheduled audit takes place. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.scheduledAuditName">scheduledAuditName</a></code> | <code>string</code> | The name you want to give to the scheduled audit. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags">IotScheduledAuditTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

How often the scheduled audit takes place. Can be one of DAILY, WEEKLY, BIWEEKLY, or MONTHLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_scheduled_audit#frequency IotScheduledAudit#frequency}

---

##### `targetCheckNames`<sup>Required</sup> <a name="targetCheckNames" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.targetCheckNames"></a>

```typescript
public readonly targetCheckNames: string[];
```

- *Type:* string[]

Which checks are performed during the scheduled audit. Checks must be enabled for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_scheduled_audit#target_check_names IotScheduledAudit#target_check_names}

---

##### `dayOfMonth`<sup>Optional</sup> <a name="dayOfMonth" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: string;
```

- *Type:* string

The day of the month on which the scheduled audit takes place.

Can be 1 through 31 or LAST. This field is required if the frequency parameter is set to MONTHLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_scheduled_audit#day_of_month IotScheduledAudit#day_of_month}

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

The day of the week on which the scheduled audit takes place.

Can be one of SUN, MON, TUE,WED, THU, FRI, or SAT. This field is required if the frequency parameter is set to WEEKLY or BIWEEKLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_scheduled_audit#day_of_week IotScheduledAudit#day_of_week}

---

##### `scheduledAuditName`<sup>Optional</sup> <a name="scheduledAuditName" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.scheduledAuditName"></a>

```typescript
public readonly scheduledAuditName: string;
```

- *Type:* string

The name you want to give to the scheduled audit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_scheduled_audit#scheduled_audit_name IotScheduledAudit#scheduled_audit_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotScheduledAuditTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags">IotScheduledAuditTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_scheduled_audit#tags IotScheduledAudit#tags}

---

### IotScheduledAuditTags <a name="IotScheduledAuditTags" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags.Initializer"></a>

```typescript
import { iotScheduledAudit } from '@cdktn/provider-awscc'

const iotScheduledAuditTags: iotScheduledAudit.IotScheduledAuditTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags.property.key">key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags.property.value">value</a></code> | <code>string</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_scheduled_audit#key IotScheduledAudit#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_scheduled_audit#value IotScheduledAudit#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotScheduledAuditTagsList <a name="IotScheduledAuditTagsList" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.Initializer"></a>

```typescript
import { iotScheduledAudit } from '@cdktn/provider-awscc'

new iotScheduledAudit.IotScheduledAuditTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.get"></a>

```typescript
public get(index: number): IotScheduledAuditTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags">IotScheduledAuditTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotScheduledAuditTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags">IotScheduledAuditTags</a>[]

---


### IotScheduledAuditTagsOutputReference <a name="IotScheduledAuditTagsOutputReference" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.Initializer"></a>

```typescript
import { iotScheduledAudit } from '@cdktn/provider-awscc'

new iotScheduledAudit.IotScheduledAuditTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags">IotScheduledAuditTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotScheduledAuditTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotScheduledAudit.IotScheduledAuditTags">IotScheduledAuditTags</a>

---



