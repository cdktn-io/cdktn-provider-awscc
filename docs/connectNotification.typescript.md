# `connectNotification` Submodule <a name="`connectNotification` Submodule" id="@cdktn/provider-awscc.connectNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectNotification <a name="ConnectNotification" id="@cdktn/provider-awscc.connectNotification.ConnectNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification awscc_connect_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer"></a>

```typescript
import { connectNotification } from '@cdktn/provider-awscc'

new connectNotification.ConnectNotification(scope: Construct, id: string, config: ConnectNotificationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig">ConnectNotificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig">ConnectNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetRecipients">resetRecipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent"></a>

```typescript
public putContent(value: ConnectNotificationContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags"></a>

```typescript
public putTags(value: IResolvable | ConnectNotificationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>[]

---

##### `resetExpiresAt` <a name="resetExpiresAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetExpiresAt"></a>

```typescript
public resetExpiresAt(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRecipients` <a name="resetRecipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetRecipients"></a>

```typescript
public resetRecipients(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectNotification resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct"></a>

```typescript
import { connectNotification } from '@cdktn/provider-awscc'

connectNotification.ConnectNotification.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement"></a>

```typescript
import { connectNotification } from '@cdktn/provider-awscc'

connectNotification.ConnectNotification.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource"></a>

```typescript
import { connectNotification } from '@cdktn/provider-awscc'

connectNotification.ConnectNotification.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport"></a>

```typescript
import { connectNotification } from '@cdktn/provider-awscc'

connectNotification.ConnectNotification.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectNotification resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectNotification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference">ConnectNotificationContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.notificationId">notificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList">ConnectNotificationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.contentInput">contentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAtInput">expiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priorityInput">priorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipientsInput">recipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipients">recipients</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.content"></a>

```typescript
public readonly content: ConnectNotificationContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference">ConnectNotificationContentOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationId`<sup>Required</sup> <a name="notificationId" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.notificationId"></a>

```typescript
public readonly notificationId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tags"></a>

```typescript
public readonly tags: ConnectNotificationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList">ConnectNotificationTagsList</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.contentInput"></a>

```typescript
public readonly contentInput: IResolvable | ConnectNotificationContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAtInput"></a>

```typescript
public readonly expiresAtInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priorityInput"></a>

```typescript
public readonly priorityInput: string;
```

- *Type:* string

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipientsInput"></a>

```typescript
public readonly recipientsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConnectNotificationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>[]

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipients"></a>

```typescript
public readonly recipients: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectNotificationConfig <a name="ConnectNotificationConfig" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.Initializer"></a>

```typescript
import { connectNotification } from '@cdktn/provider-awscc'

const connectNotificationConfig: connectNotification.ConnectNotificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | The content of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.expiresAt">expiresAt</a></code> | <code>string</code> | The time a notification will expire. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.priority">priority</a></code> | <code>string</code> | The priority of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.recipients">recipients</a></code> | <code>string[]</code> | The recipients of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>[]</code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.content"></a>

```typescript
public readonly content: ConnectNotificationContent;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

The content of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#content ConnectNotification#content}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#instance_arn ConnectNotification#instance_arn}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

The time a notification will expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#expires_at ConnectNotification#expires_at}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

The priority of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#priority ConnectNotification#priority}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.recipients"></a>

```typescript
public readonly recipients: string[];
```

- *Type:* string[]

The recipients of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#recipients ConnectNotification#recipients}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConnectNotificationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#tags ConnectNotification#tags}

---

### ConnectNotificationContent <a name="ConnectNotificationContent" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.Initializer"></a>

```typescript
import { connectNotification } from '@cdktn/provider-awscc'

const connectNotificationContent: connectNotification.ConnectNotificationContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.deDe">deDe</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.enUs">enUs</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.esEs">esEs</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.frFr">frFr</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.idId">idId</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.itIt">itIt</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.jaJp">jaJp</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.koKr">koKr</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.ptBr">ptBr</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhCn">zhCn</a></code> | <code>string</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhTw">zhTw</a></code> | <code>string</code> | Localized notification content. |

---

##### `deDe`<sup>Optional</sup> <a name="deDe" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.deDe"></a>

```typescript
public readonly deDe: string;
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#de_de ConnectNotification#de_de}

---

##### `enUs`<sup>Optional</sup> <a name="enUs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.enUs"></a>

```typescript
public readonly enUs: string;
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#en_us ConnectNotification#en_us}

---

##### `esEs`<sup>Optional</sup> <a name="esEs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.esEs"></a>

```typescript
public readonly esEs: string;
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#es_es ConnectNotification#es_es}

---

##### `frFr`<sup>Optional</sup> <a name="frFr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.frFr"></a>

```typescript
public readonly frFr: string;
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#fr_fr ConnectNotification#fr_fr}

---

##### `idId`<sup>Optional</sup> <a name="idId" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.idId"></a>

```typescript
public readonly idId: string;
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#id_id ConnectNotification#id_id}

---

##### `itIt`<sup>Optional</sup> <a name="itIt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.itIt"></a>

```typescript
public readonly itIt: string;
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#it_it ConnectNotification#it_it}

---

##### `jaJp`<sup>Optional</sup> <a name="jaJp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.jaJp"></a>

```typescript
public readonly jaJp: string;
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#ja_jp ConnectNotification#ja_jp}

---

##### `koKr`<sup>Optional</sup> <a name="koKr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.koKr"></a>

```typescript
public readonly koKr: string;
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#ko_kr ConnectNotification#ko_kr}

---

##### `ptBr`<sup>Optional</sup> <a name="ptBr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.ptBr"></a>

```typescript
public readonly ptBr: string;
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#pt_br ConnectNotification#pt_br}

---

##### `zhCn`<sup>Optional</sup> <a name="zhCn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhCn"></a>

```typescript
public readonly zhCn: string;
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#zh_cn ConnectNotification#zh_cn}

---

##### `zhTw`<sup>Optional</sup> <a name="zhTw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhTw"></a>

```typescript
public readonly zhTw: string;
```

- *Type:* string

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#zh_tw ConnectNotification#zh_tw}

---

### ConnectNotificationTags <a name="ConnectNotificationTags" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.Initializer"></a>

```typescript
import { connectNotification } from '@cdktn/provider-awscc'

const connectNotificationTags: connectNotification.ConnectNotificationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#key ConnectNotification#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_notification#value ConnectNotification#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectNotificationContentOutputReference <a name="ConnectNotificationContentOutputReference" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer"></a>

```typescript
import { connectNotification } from '@cdktn/provider-awscc'

new connectNotification.ConnectNotificationContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetDeDe">resetDeDe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEnUs">resetEnUs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEsEs">resetEsEs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetFrFr">resetFrFr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetIdId">resetIdId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetItIt">resetItIt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetJaJp">resetJaJp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetKoKr">resetKoKr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetPtBr">resetPtBr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhCn">resetZhCn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhTw">resetZhTw</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeDe` <a name="resetDeDe" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetDeDe"></a>

```typescript
public resetDeDe(): void
```

##### `resetEnUs` <a name="resetEnUs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEnUs"></a>

```typescript
public resetEnUs(): void
```

##### `resetEsEs` <a name="resetEsEs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEsEs"></a>

```typescript
public resetEsEs(): void
```

##### `resetFrFr` <a name="resetFrFr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetFrFr"></a>

```typescript
public resetFrFr(): void
```

##### `resetIdId` <a name="resetIdId" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetIdId"></a>

```typescript
public resetIdId(): void
```

##### `resetItIt` <a name="resetItIt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetItIt"></a>

```typescript
public resetItIt(): void
```

##### `resetJaJp` <a name="resetJaJp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetJaJp"></a>

```typescript
public resetJaJp(): void
```

##### `resetKoKr` <a name="resetKoKr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetKoKr"></a>

```typescript
public resetKoKr(): void
```

##### `resetPtBr` <a name="resetPtBr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetPtBr"></a>

```typescript
public resetPtBr(): void
```

##### `resetZhCn` <a name="resetZhCn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhCn"></a>

```typescript
public resetZhCn(): void
```

##### `resetZhTw` <a name="resetZhTw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhTw"></a>

```typescript
public resetZhTw(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDeInput">deDeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUsInput">enUsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEsInput">esEsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFrInput">frFrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idIdInput">idIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itItInput">itItInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJpInput">jaJpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKrInput">koKrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBrInput">ptBrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCnInput">zhCnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTwInput">zhTwInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDe">deDe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUs">enUs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEs">esEs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFr">frFr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idId">idId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itIt">itIt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJp">jaJp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKr">koKr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBr">ptBr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCn">zhCn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTw">zhTw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deDeInput`<sup>Optional</sup> <a name="deDeInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDeInput"></a>

```typescript
public readonly deDeInput: string;
```

- *Type:* string

---

##### `enUsInput`<sup>Optional</sup> <a name="enUsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUsInput"></a>

```typescript
public readonly enUsInput: string;
```

- *Type:* string

---

##### `esEsInput`<sup>Optional</sup> <a name="esEsInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEsInput"></a>

```typescript
public readonly esEsInput: string;
```

- *Type:* string

---

##### `frFrInput`<sup>Optional</sup> <a name="frFrInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFrInput"></a>

```typescript
public readonly frFrInput: string;
```

- *Type:* string

---

##### `idIdInput`<sup>Optional</sup> <a name="idIdInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idIdInput"></a>

```typescript
public readonly idIdInput: string;
```

- *Type:* string

---

##### `itItInput`<sup>Optional</sup> <a name="itItInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itItInput"></a>

```typescript
public readonly itItInput: string;
```

- *Type:* string

---

##### `jaJpInput`<sup>Optional</sup> <a name="jaJpInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJpInput"></a>

```typescript
public readonly jaJpInput: string;
```

- *Type:* string

---

##### `koKrInput`<sup>Optional</sup> <a name="koKrInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKrInput"></a>

```typescript
public readonly koKrInput: string;
```

- *Type:* string

---

##### `ptBrInput`<sup>Optional</sup> <a name="ptBrInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBrInput"></a>

```typescript
public readonly ptBrInput: string;
```

- *Type:* string

---

##### `zhCnInput`<sup>Optional</sup> <a name="zhCnInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCnInput"></a>

```typescript
public readonly zhCnInput: string;
```

- *Type:* string

---

##### `zhTwInput`<sup>Optional</sup> <a name="zhTwInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTwInput"></a>

```typescript
public readonly zhTwInput: string;
```

- *Type:* string

---

##### `deDe`<sup>Required</sup> <a name="deDe" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDe"></a>

```typescript
public readonly deDe: string;
```

- *Type:* string

---

##### `enUs`<sup>Required</sup> <a name="enUs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUs"></a>

```typescript
public readonly enUs: string;
```

- *Type:* string

---

##### `esEs`<sup>Required</sup> <a name="esEs" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEs"></a>

```typescript
public readonly esEs: string;
```

- *Type:* string

---

##### `frFr`<sup>Required</sup> <a name="frFr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFr"></a>

```typescript
public readonly frFr: string;
```

- *Type:* string

---

##### `idId`<sup>Required</sup> <a name="idId" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idId"></a>

```typescript
public readonly idId: string;
```

- *Type:* string

---

##### `itIt`<sup>Required</sup> <a name="itIt" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itIt"></a>

```typescript
public readonly itIt: string;
```

- *Type:* string

---

##### `jaJp`<sup>Required</sup> <a name="jaJp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJp"></a>

```typescript
public readonly jaJp: string;
```

- *Type:* string

---

##### `koKr`<sup>Required</sup> <a name="koKr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKr"></a>

```typescript
public readonly koKr: string;
```

- *Type:* string

---

##### `ptBr`<sup>Required</sup> <a name="ptBr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBr"></a>

```typescript
public readonly ptBr: string;
```

- *Type:* string

---

##### `zhCn`<sup>Required</sup> <a name="zhCn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCn"></a>

```typescript
public readonly zhCn: string;
```

- *Type:* string

---

##### `zhTw`<sup>Required</sup> <a name="zhTw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTw"></a>

```typescript
public readonly zhTw: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectNotificationContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

---


### ConnectNotificationTagsList <a name="ConnectNotificationTagsList" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer"></a>

```typescript
import { connectNotification } from '@cdktn/provider-awscc'

new connectNotification.ConnectNotificationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get"></a>

```typescript
public get(index: number): ConnectNotificationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectNotificationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>[]

---


### ConnectNotificationTagsOutputReference <a name="ConnectNotificationTagsOutputReference" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer"></a>

```typescript
import { connectNotification } from '@cdktn/provider-awscc'

new connectNotification.ConnectNotificationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectNotificationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>

---



