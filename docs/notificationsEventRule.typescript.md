# `notificationsEventRule` Submodule <a name="`notificationsEventRule` Submodule" id="@cdktn/provider-awscc.notificationsEventRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsEventRule <a name="NotificationsEventRule" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_event_rule awscc_notifications_event_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer"></a>

```typescript
import { notificationsEventRule } from '@cdktn/provider-awscc'

new notificationsEventRule.NotificationsEventRule(scope: Construct, id: string, config: NotificationsEventRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig">NotificationsEventRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig">NotificationsEventRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.resetEventPattern">resetEventPattern</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEventPattern` <a name="resetEventPattern" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.resetEventPattern"></a>

```typescript
public resetEventPattern(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NotificationsEventRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isConstruct"></a>

```typescript
import { notificationsEventRule } from '@cdktn/provider-awscc'

notificationsEventRule.NotificationsEventRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformElement"></a>

```typescript
import { notificationsEventRule } from '@cdktn/provider-awscc'

notificationsEventRule.NotificationsEventRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformResource"></a>

```typescript
import { notificationsEventRule } from '@cdktn/provider-awscc'

notificationsEventRule.NotificationsEventRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport"></a>

```typescript
import { notificationsEventRule } from '@cdktn/provider-awscc'

notificationsEventRule.NotificationsEventRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NotificationsEventRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationsEventRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationsEventRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_event_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NotificationsEventRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.managedRules">managedRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.statusSummaryByRegion">statusSummaryByRegion</a></code> | <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap">NotificationsEventRuleStatusSummaryByRegionMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventPatternInput">eventPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.notificationConfigurationArnInput">notificationConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventPattern">eventPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.notificationConfigurationArn">notificationConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.source">source</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedRules`<sup>Required</sup> <a name="managedRules" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.managedRules"></a>

```typescript
public readonly managedRules: string[];
```

- *Type:* string[]

---

##### `statusSummaryByRegion`<sup>Required</sup> <a name="statusSummaryByRegion" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.statusSummaryByRegion"></a>

```typescript
public readonly statusSummaryByRegion: NotificationsEventRuleStatusSummaryByRegionMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap">NotificationsEventRuleStatusSummaryByRegionMap</a>

---

##### `eventPatternInput`<sup>Optional</sup> <a name="eventPatternInput" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventPatternInput"></a>

```typescript
public readonly eventPatternInput: string;
```

- *Type:* string

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `notificationConfigurationArnInput`<sup>Optional</sup> <a name="notificationConfigurationArnInput" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.notificationConfigurationArnInput"></a>

```typescript
public readonly notificationConfigurationArnInput: string;
```

- *Type:* string

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `notificationConfigurationArn`<sup>Required</sup> <a name="notificationConfigurationArn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.notificationConfigurationArn"></a>

```typescript
public readonly notificationConfigurationArn: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsEventRuleConfig <a name="NotificationsEventRuleConfig" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.Initializer"></a>

```typescript
import { notificationsEventRule } from '@cdktn/provider-awscc'

const notificationsEventRuleConfig: notificationsEventRule.NotificationsEventRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.eventType">eventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_event_rule#event_type NotificationsEventRule#event_type}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.notificationConfigurationArn">notificationConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_event_rule#notification_configuration_arn NotificationsEventRule#notification_configuration_arn}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_event_rule#regions NotificationsEventRule#regions}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_event_rule#source NotificationsEventRule#source}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.eventPattern">eventPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_event_rule#event_pattern NotificationsEventRule#event_pattern}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_event_rule#event_type NotificationsEventRule#event_type}.

---

##### `notificationConfigurationArn`<sup>Required</sup> <a name="notificationConfigurationArn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.notificationConfigurationArn"></a>

```typescript
public readonly notificationConfigurationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_event_rule#notification_configuration_arn NotificationsEventRule#notification_configuration_arn}.

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_event_rule#regions NotificationsEventRule#regions}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_event_rule#source NotificationsEventRule#source}.

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notifications_event_rule#event_pattern NotificationsEventRule#event_pattern}.

---

### NotificationsEventRuleStatusSummaryByRegion <a name="NotificationsEventRuleStatusSummaryByRegion" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegion.Initializer"></a>

```typescript
import { notificationsEventRule } from '@cdktn/provider-awscc'

const notificationsEventRuleStatusSummaryByRegion: notificationsEventRule.NotificationsEventRuleStatusSummaryByRegion = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### NotificationsEventRuleStatusSummaryByRegionMap <a name="NotificationsEventRuleStatusSummaryByRegionMap" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer"></a>

```typescript
import { notificationsEventRule } from '@cdktn/provider-awscc'

new notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.get"></a>

```typescript
public get(key: string): NotificationsEventRuleStatusSummaryByRegionOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NotificationsEventRuleStatusSummaryByRegionOutputReference <a name="NotificationsEventRuleStatusSummaryByRegionOutputReference" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer"></a>

```typescript
import { notificationsEventRule } from '@cdktn/provider-awscc'

new notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegion">NotificationsEventRuleStatusSummaryByRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotificationsEventRuleStatusSummaryByRegion;
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegion">NotificationsEventRuleStatusSummaryByRegion</a>

---



