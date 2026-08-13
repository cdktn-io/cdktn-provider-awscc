# `lightsailAlarm` Submodule <a name="`lightsailAlarm` Submodule" id="@cdktn/provider-awscc.lightsailAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailAlarm <a name="LightsailAlarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm awscc_lightsail_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer"></a>

```typescript
import { lightsailAlarm } from '@cdktn/provider-awscc'

new lightsailAlarm.LightsailAlarm(scope: Construct, id: string, config: LightsailAlarmConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig">LightsailAlarmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig">LightsailAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetContactProtocols">resetContactProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetDatapointsToAlarm">resetDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationEnabled">resetNotificationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationTriggers">resetNotificationTriggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetTreatMissingData">resetTreatMissingData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetContactProtocols` <a name="resetContactProtocols" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetContactProtocols"></a>

```typescript
public resetContactProtocols(): void
```

##### `resetDatapointsToAlarm` <a name="resetDatapointsToAlarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetDatapointsToAlarm"></a>

```typescript
public resetDatapointsToAlarm(): void
```

##### `resetNotificationEnabled` <a name="resetNotificationEnabled" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationEnabled"></a>

```typescript
public resetNotificationEnabled(): void
```

##### `resetNotificationTriggers` <a name="resetNotificationTriggers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationTriggers"></a>

```typescript
public resetNotificationTriggers(): void
```

##### `resetTreatMissingData` <a name="resetTreatMissingData" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetTreatMissingData"></a>

```typescript
public resetTreatMissingData(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isConstruct"></a>

```typescript
import { lightsailAlarm } from '@cdktn/provider-awscc'

lightsailAlarm.LightsailAlarm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformElement"></a>

```typescript
import { lightsailAlarm } from '@cdktn/provider-awscc'

lightsailAlarm.LightsailAlarm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformResource"></a>

```typescript
import { lightsailAlarm } from '@cdktn/provider-awscc'

lightsailAlarm.LightsailAlarm.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport"></a>

```typescript
import { lightsailAlarm } from '@cdktn/provider-awscc'

lightsailAlarm.LightsailAlarm.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LightsailAlarm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailAlarm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LightsailAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmArn">alarmArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmNameInput">alarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocolsInput">contactProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarmInput">datapointsToAlarmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceNameInput">monitoredResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabledInput">notificationEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggersInput">notificationTriggersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingDataInput">treatMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmName">alarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocols">contactProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceName">monitoredResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabled">notificationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggers">notificationTriggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingData">treatMissingData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alarmArn`<sup>Required</sup> <a name="alarmArn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmArn"></a>

```typescript
public readonly alarmArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmNameInput"></a>

```typescript
public readonly alarmNameInput: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `contactProtocolsInput`<sup>Optional</sup> <a name="contactProtocolsInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocolsInput"></a>

```typescript
public readonly contactProtocolsInput: string[];
```

- *Type:* string[]

---

##### `datapointsToAlarmInput`<sup>Optional</sup> <a name="datapointsToAlarmInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarmInput"></a>

```typescript
public readonly datapointsToAlarmInput: number;
```

- *Type:* number

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `monitoredResourceNameInput`<sup>Optional</sup> <a name="monitoredResourceNameInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceNameInput"></a>

```typescript
public readonly monitoredResourceNameInput: string;
```

- *Type:* string

---

##### `notificationEnabledInput`<sup>Optional</sup> <a name="notificationEnabledInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabledInput"></a>

```typescript
public readonly notificationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notificationTriggersInput`<sup>Optional</sup> <a name="notificationTriggersInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggersInput"></a>

```typescript
public readonly notificationTriggersInput: string[];
```

- *Type:* string[]

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `treatMissingDataInput`<sup>Optional</sup> <a name="treatMissingDataInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingDataInput"></a>

```typescript
public readonly treatMissingDataInput: string;
```

- *Type:* string

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `contactProtocols`<sup>Required</sup> <a name="contactProtocols" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocols"></a>

```typescript
public readonly contactProtocols: string[];
```

- *Type:* string[]

---

##### `datapointsToAlarm`<sup>Required</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarm"></a>

```typescript
public readonly datapointsToAlarm: number;
```

- *Type:* number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `monitoredResourceName`<sup>Required</sup> <a name="monitoredResourceName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceName"></a>

```typescript
public readonly monitoredResourceName: string;
```

- *Type:* string

---

##### `notificationEnabled`<sup>Required</sup> <a name="notificationEnabled" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabled"></a>

```typescript
public readonly notificationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notificationTriggers`<sup>Required</sup> <a name="notificationTriggers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggers"></a>

```typescript
public readonly notificationTriggers: string[];
```

- *Type:* string[]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingData"></a>

```typescript
public readonly treatMissingData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailAlarmConfig <a name="LightsailAlarmConfig" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.Initializer"></a>

```typescript
import { lightsailAlarm } from '@cdktn/provider-awscc'

const lightsailAlarmConfig: lightsailAlarm.LightsailAlarmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.alarmName">alarmName</a></code> | <code>string</code> | The name for the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The arithmetic operation to use when comparing the specified statistic to the threshold. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | The number of most recent periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.metricName">metricName</a></code> | <code>string</code> | The name of the metric to associate with the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.monitoredResourceName">monitoredResourceName</a></code> | <code>string</code> | The name of the Lightsail resource that the alarm monitors. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.threshold">threshold</a></code> | <code>number</code> | The value against which the specified statistic is compared. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.contactProtocols">contactProtocols</a></code> | <code>string[]</code> | The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>number</code> | The number of data points that must be not within the specified threshold to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationEnabled">notificationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationTriggers">notificationTriggers</a></code> | <code>string[]</code> | The alarm states that trigger a notification. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.treatMissingData">treatMissingData</a></code> | <code>string</code> | Sets how this alarm will handle missing data points. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

The name for the alarm.

Specify the name of an existing alarm to update, and overwrite the previous configuration of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#alarm_name LightsailAlarm#alarm_name}

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The arithmetic operation to use when comparing the specified statistic to the threshold.

The specified statistic value is used as the first operand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#comparison_operator LightsailAlarm#comparison_operator}

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

The number of most recent periods over which data is compared to the specified threshold.

If you are setting an "M out of N" alarm, this value (evaluationPeriods) is the N.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#evaluation_periods LightsailAlarm#evaluation_periods}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

The name of the metric to associate with the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#metric_name LightsailAlarm#metric_name}

---

##### `monitoredResourceName`<sup>Required</sup> <a name="monitoredResourceName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.monitoredResourceName"></a>

```typescript
public readonly monitoredResourceName: string;
```

- *Type:* string

The name of the Lightsail resource that the alarm monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#monitored_resource_name LightsailAlarm#monitored_resource_name}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

The value against which the specified statistic is compared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#threshold LightsailAlarm#threshold}

---

##### `contactProtocols`<sup>Optional</sup> <a name="contactProtocols" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.contactProtocols"></a>

```typescript
public readonly contactProtocols: string[];
```

- *Type:* string[]

The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#contact_protocols LightsailAlarm#contact_protocols}

---

##### `datapointsToAlarm`<sup>Optional</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.datapointsToAlarm"></a>

```typescript
public readonly datapointsToAlarm: number;
```

- *Type:* number

The number of data points that must be not within the specified threshold to trigger the alarm.

If you are setting an "M out of N" alarm, this value (datapointsToAlarm) is the M.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#datapoints_to_alarm LightsailAlarm#datapoints_to_alarm}

---

##### `notificationEnabled`<sup>Optional</sup> <a name="notificationEnabled" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationEnabled"></a>

```typescript
public readonly notificationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#notification_enabled LightsailAlarm#notification_enabled}

---

##### `notificationTriggers`<sup>Optional</sup> <a name="notificationTriggers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationTriggers"></a>

```typescript
public readonly notificationTriggers: string[];
```

- *Type:* string[]

The alarm states that trigger a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#notification_triggers LightsailAlarm#notification_triggers}

---

##### `treatMissingData`<sup>Optional</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.treatMissingData"></a>

```typescript
public readonly treatMissingData: string;
```

- *Type:* string

Sets how this alarm will handle missing data points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#treat_missing_data LightsailAlarm#treat_missing_data}

---



