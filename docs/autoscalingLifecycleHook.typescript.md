# `autoscalingLifecycleHook` Submodule <a name="`autoscalingLifecycleHook` Submodule" id="@cdktn/provider-awscc.autoscalingLifecycleHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingLifecycleHook <a name="AutoscalingLifecycleHook" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook awscc_autoscaling_lifecycle_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer"></a>

```typescript
import { autoscalingLifecycleHook } from '@cdktn/provider-awscc'

new autoscalingLifecycleHook.AutoscalingLifecycleHook(scope: Construct, id: string, config: AutoscalingLifecycleHookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig">AutoscalingLifecycleHookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig">AutoscalingLifecycleHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetDefaultResult">resetDefaultResult</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetHeartbeatTimeout">resetHeartbeatTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetLifecycleHookName">resetLifecycleHookName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationMetadata">resetNotificationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationTargetArn">resetNotificationTargetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefaultResult` <a name="resetDefaultResult" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetDefaultResult"></a>

```typescript
public resetDefaultResult(): void
```

##### `resetHeartbeatTimeout` <a name="resetHeartbeatTimeout" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetHeartbeatTimeout"></a>

```typescript
public resetHeartbeatTimeout(): void
```

##### `resetLifecycleHookName` <a name="resetLifecycleHookName" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetLifecycleHookName"></a>

```typescript
public resetLifecycleHookName(): void
```

##### `resetNotificationMetadata` <a name="resetNotificationMetadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationMetadata"></a>

```typescript
public resetNotificationMetadata(): void
```

##### `resetNotificationTargetArn` <a name="resetNotificationTargetArn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationTargetArn"></a>

```typescript
public resetNotificationTargetArn(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AutoscalingLifecycleHook resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct"></a>

```typescript
import { autoscalingLifecycleHook } from '@cdktn/provider-awscc'

autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement"></a>

```typescript
import { autoscalingLifecycleHook } from '@cdktn/provider-awscc'

autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource"></a>

```typescript
import { autoscalingLifecycleHook } from '@cdktn/provider-awscc'

autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport"></a>

```typescript
import { autoscalingLifecycleHook } from '@cdktn/provider-awscc'

autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AutoscalingLifecycleHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutoscalingLifecycleHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutoscalingLifecycleHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingLifecycleHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoScalingGroupNameInput">autoScalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResultInput">defaultResultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeoutInput">heartbeatTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleHookNameInput">lifecycleHookNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransitionInput">lifecycleTransitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadataInput">notificationMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArnInput">notificationTargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoScalingGroupName">autoScalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResult">defaultResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeout">heartbeatTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleHookName">lifecycleHookName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransition">lifecycleTransition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadata">notificationMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArn">notificationTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `autoScalingGroupNameInput`<sup>Optional</sup> <a name="autoScalingGroupNameInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoScalingGroupNameInput"></a>

```typescript
public readonly autoScalingGroupNameInput: string;
```

- *Type:* string

---

##### `defaultResultInput`<sup>Optional</sup> <a name="defaultResultInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResultInput"></a>

```typescript
public readonly defaultResultInput: string;
```

- *Type:* string

---

##### `heartbeatTimeoutInput`<sup>Optional</sup> <a name="heartbeatTimeoutInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeoutInput"></a>

```typescript
public readonly heartbeatTimeoutInput: number;
```

- *Type:* number

---

##### `lifecycleHookNameInput`<sup>Optional</sup> <a name="lifecycleHookNameInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleHookNameInput"></a>

```typescript
public readonly lifecycleHookNameInput: string;
```

- *Type:* string

---

##### `lifecycleTransitionInput`<sup>Optional</sup> <a name="lifecycleTransitionInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransitionInput"></a>

```typescript
public readonly lifecycleTransitionInput: string;
```

- *Type:* string

---

##### `notificationMetadataInput`<sup>Optional</sup> <a name="notificationMetadataInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadataInput"></a>

```typescript
public readonly notificationMetadataInput: string;
```

- *Type:* string

---

##### `notificationTargetArnInput`<sup>Optional</sup> <a name="notificationTargetArnInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArnInput"></a>

```typescript
public readonly notificationTargetArnInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `autoScalingGroupName`<sup>Required</sup> <a name="autoScalingGroupName" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoScalingGroupName"></a>

```typescript
public readonly autoScalingGroupName: string;
```

- *Type:* string

---

##### `defaultResult`<sup>Required</sup> <a name="defaultResult" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResult"></a>

```typescript
public readonly defaultResult: string;
```

- *Type:* string

---

##### `heartbeatTimeout`<sup>Required</sup> <a name="heartbeatTimeout" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeout"></a>

```typescript
public readonly heartbeatTimeout: number;
```

- *Type:* number

---

##### `lifecycleHookName`<sup>Required</sup> <a name="lifecycleHookName" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleHookName"></a>

```typescript
public readonly lifecycleHookName: string;
```

- *Type:* string

---

##### `lifecycleTransition`<sup>Required</sup> <a name="lifecycleTransition" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransition"></a>

```typescript
public readonly lifecycleTransition: string;
```

- *Type:* string

---

##### `notificationMetadata`<sup>Required</sup> <a name="notificationMetadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadata"></a>

```typescript
public readonly notificationMetadata: string;
```

- *Type:* string

---

##### `notificationTargetArn`<sup>Required</sup> <a name="notificationTargetArn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArn"></a>

```typescript
public readonly notificationTargetArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingLifecycleHookConfig <a name="AutoscalingLifecycleHookConfig" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.Initializer"></a>

```typescript
import { autoscalingLifecycleHook } from '@cdktn/provider-awscc'

const autoscalingLifecycleHookConfig: autoscalingLifecycleHook.AutoscalingLifecycleHookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.autoScalingGroupName">autoScalingGroupName</a></code> | <code>string</code> | The name of the Auto Scaling group for the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleTransition">lifecycleTransition</a></code> | <code>string</code> | The instance state to which you want to attach the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.defaultResult">defaultResult</a></code> | <code>string</code> | The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.heartbeatTimeout">heartbeatTimeout</a></code> | <code>number</code> | The maximum time, in seconds, that can elapse before the lifecycle hook times out. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleHookName">lifecycleHookName</a></code> | <code>string</code> | The name of the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationMetadata">notificationMetadata</a></code> | <code>string</code> | Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationTargetArn">notificationTargetArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoScalingGroupName`<sup>Required</sup> <a name="autoScalingGroupName" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.autoScalingGroupName"></a>

```typescript
public readonly autoScalingGroupName: string;
```

- *Type:* string

The name of the Auto Scaling group for the lifecycle hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#auto_scaling_group_name AutoscalingLifecycleHook#auto_scaling_group_name}

---

##### `lifecycleTransition`<sup>Required</sup> <a name="lifecycleTransition" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleTransition"></a>

```typescript
public readonly lifecycleTransition: string;
```

- *Type:* string

The instance state to which you want to attach the lifecycle hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}

---

##### `defaultResult`<sup>Optional</sup> <a name="defaultResult" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.defaultResult"></a>

```typescript
public readonly defaultResult: string;
```

- *Type:* string

The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs.

The valid values are CONTINUE and ABANDON (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#default_result AutoscalingLifecycleHook#default_result}

---

##### `heartbeatTimeout`<sup>Optional</sup> <a name="heartbeatTimeout" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.heartbeatTimeout"></a>

```typescript
public readonly heartbeatTimeout: number;
```

- *Type:* number

The maximum time, in seconds, that can elapse before the lifecycle hook times out.

The range is from 30 to 7200 seconds. The default value is 3600 seconds (1 hour). If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}

---

##### `lifecycleHookName`<sup>Optional</sup> <a name="lifecycleHookName" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleHookName"></a>

```typescript
public readonly lifecycleHookName: string;
```

- *Type:* string

The name of the lifecycle hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#lifecycle_hook_name AutoscalingLifecycleHook#lifecycle_hook_name}

---

##### `notificationMetadata`<sup>Optional</sup> <a name="notificationMetadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationMetadata"></a>

```typescript
public readonly notificationMetadata: string;
```

- *Type:* string

Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#notification_metadata AutoscalingLifecycleHook#notification_metadata}

---

##### `notificationTargetArn`<sup>Optional</sup> <a name="notificationTargetArn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationTargetArn"></a>

```typescript
public readonly notificationTargetArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook.

You can specify an Amazon SQS queue or an Amazon SNS topic. The notification message includes the following information: lifecycle action token, user account ID, Auto Scaling group name, lifecycle hook name, instance ID, lifecycle transition, and notification metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#role_arn AutoscalingLifecycleHook#role_arn}

---



