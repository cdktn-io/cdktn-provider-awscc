# `devopsguruNotificationChannel` Submodule <a name="`devopsguruNotificationChannel` Submodule" id="@cdktn/provider-awscc.devopsguruNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruNotificationChannel <a name="DevopsguruNotificationChannel" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_notification_channel awscc_devopsguru_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktn/provider-awscc'

new devopsguruNotificationChannel.DevopsguruNotificationChannel(scope: Construct, id: string, config: DevopsguruNotificationChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig">DevopsguruNotificationChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig">DevopsguruNotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.putConfig">putConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.putConfig"></a>

```typescript
public putConfig(value: DevopsguruNotificationChannelConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsguruNotificationChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktn/provider-awscc'

devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktn/provider-awscc'

devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktn/provider-awscc'

devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktn/provider-awscc'

devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DevopsguruNotificationChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsguruNotificationChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsguruNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsguruNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference">DevopsguruNotificationChannelConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.notificationChannelId">notificationChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.configInput">configInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.config"></a>

```typescript
public readonly config: DevopsguruNotificationChannelConfigAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference">DevopsguruNotificationChannelConfigAOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationChannelId`<sup>Required</sup> <a name="notificationChannelId" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.notificationChannelId"></a>

```typescript
public readonly notificationChannelId: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | DevopsguruNotificationChannelConfigA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruNotificationChannelConfig <a name="DevopsguruNotificationChannelConfig" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktn/provider-awscc'

const devopsguruNotificationChannelConfig: devopsguruNotificationChannel.DevopsguruNotificationChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a></code> | Information about notification channels you have configured with DevOps Guru. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.config"></a>

```typescript
public readonly config: DevopsguruNotificationChannelConfigA;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a>

Information about notification channels you have configured with DevOps Guru.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_notification_channel#config DevopsguruNotificationChannel#config}

---

### DevopsguruNotificationChannelConfigA <a name="DevopsguruNotificationChannelConfigA" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktn/provider-awscc'

const devopsguruNotificationChannelConfigA: devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a></code> | Information about filters of a notification channel configured in DevOpsGuru to filter for insights. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.sns">sns</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a></code> | Information about a notification channel configured in DevOps Guru to send notifications when insights are created. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.filters"></a>

```typescript
public readonly filters: DevopsguruNotificationChannelConfigFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a>

Information about filters of a notification channel configured in DevOpsGuru to filter for insights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_notification_channel#filters DevopsguruNotificationChannel#filters}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA.property.sns"></a>

```typescript
public readonly sns: DevopsguruNotificationChannelConfigSns;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a>

Information about a notification channel configured in DevOps Guru to send notifications when insights are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_notification_channel#sns DevopsguruNotificationChannel#sns}

---

### DevopsguruNotificationChannelConfigFilters <a name="DevopsguruNotificationChannelConfigFilters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktn/provider-awscc'

const devopsguruNotificationChannelConfigFilters: devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.messageTypes">messageTypes</a></code> | <code>string[]</code> | DevOps Guru message types to filter for. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.severities">severities</a></code> | <code>string[]</code> | DevOps Guru insight severities to filter for. |

---

##### `messageTypes`<sup>Optional</sup> <a name="messageTypes" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.messageTypes"></a>

```typescript
public readonly messageTypes: string[];
```

- *Type:* string[]

DevOps Guru message types to filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_notification_channel#message_types DevopsguruNotificationChannel#message_types}

---

##### `severities`<sup>Optional</sup> <a name="severities" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters.property.severities"></a>

```typescript
public readonly severities: string[];
```

- *Type:* string[]

DevOps Guru insight severities to filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_notification_channel#severities DevopsguruNotificationChannel#severities}

---

### DevopsguruNotificationChannelConfigSns <a name="DevopsguruNotificationChannelConfigSns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktn/provider-awscc'

const devopsguruNotificationChannelConfigSns: devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns.property.topicArn">topicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}. |

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruNotificationChannelConfigAOutputReference <a name="DevopsguruNotificationChannelConfigAOutputReference" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktn/provider-awscc'

new devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putSns">putSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetSns">resetSns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilters` <a name="putFilters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putFilters"></a>

```typescript
public putFilters(value: DevopsguruNotificationChannelConfigFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a>

---

##### `putSns` <a name="putSns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putSns"></a>

```typescript
public putSns(value: DevopsguruNotificationChannelConfigSns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.putSns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a>

---

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetSns` <a name="resetSns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.resetSns"></a>

```typescript
public resetSns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference">DevopsguruNotificationChannelConfigFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.sns">sns</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference">DevopsguruNotificationChannelConfigSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filtersInput">filtersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.snsInput">snsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filters"></a>

```typescript
public readonly filters: DevopsguruNotificationChannelConfigFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference">DevopsguruNotificationChannelConfigFiltersOutputReference</a>

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.sns"></a>

```typescript
public readonly sns: DevopsguruNotificationChannelConfigSnsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference">DevopsguruNotificationChannelConfigSnsOutputReference</a>

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | DevopsguruNotificationChannelConfigFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a>

---

##### `snsInput`<sup>Optional</sup> <a name="snsInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.snsInput"></a>

```typescript
public readonly snsInput: IResolvable | DevopsguruNotificationChannelConfigSns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruNotificationChannelConfigA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigA">DevopsguruNotificationChannelConfigA</a>

---


### DevopsguruNotificationChannelConfigFiltersOutputReference <a name="DevopsguruNotificationChannelConfigFiltersOutputReference" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktn/provider-awscc'

new devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetMessageTypes">resetMessageTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetSeverities">resetSeverities</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageTypes` <a name="resetMessageTypes" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetMessageTypes"></a>

```typescript
public resetMessageTypes(): void
```

##### `resetSeverities` <a name="resetSeverities" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.resetSeverities"></a>

```typescript
public resetSeverities(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypesInput">messageTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severitiesInput">severitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypes">messageTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severities">severities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageTypesInput`<sup>Optional</sup> <a name="messageTypesInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypesInput"></a>

```typescript
public readonly messageTypesInput: string[];
```

- *Type:* string[]

---

##### `severitiesInput`<sup>Optional</sup> <a name="severitiesInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severitiesInput"></a>

```typescript
public readonly severitiesInput: string[];
```

- *Type:* string[]

---

##### `messageTypes`<sup>Required</sup> <a name="messageTypes" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.messageTypes"></a>

```typescript
public readonly messageTypes: string[];
```

- *Type:* string[]

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.severities"></a>

```typescript
public readonly severities: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruNotificationChannelConfigFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigFilters">DevopsguruNotificationChannelConfigFilters</a>

---


### DevopsguruNotificationChannelConfigSnsOutputReference <a name="DevopsguruNotificationChannelConfigSnsOutputReference" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktn/provider-awscc'

new devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.resetTopicArn"></a>

```typescript
public resetTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruNotificationChannelConfigSns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruNotificationChannel.DevopsguruNotificationChannelConfigSns">DevopsguruNotificationChannelConfigSns</a>

---



