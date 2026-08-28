# `connectRoutingProfile` Submodule <a name="`connectRoutingProfile` Submodule" id="@cdktn/provider-awscc.connectRoutingProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectRoutingProfile <a name="ConnectRoutingProfile" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile awscc_connect_routing_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

new connectRoutingProfile.ConnectRoutingProfile(scope: Construct, id: string, config: ConnectRoutingProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig">ConnectRoutingProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig">ConnectRoutingProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putManualAssignmentQueueConfigs">putManualAssignmentQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies">putMediaConcurrencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs">putQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetAgentAvailabilityTimer">resetAgentAvailabilityTimer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetManualAssignmentQueueConfigs">resetManualAssignmentQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetQueueConfigs">resetQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManualAssignmentQueueConfigs` <a name="putManualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putManualAssignmentQueueConfigs"></a>

```typescript
public putManualAssignmentQueueConfigs(value: IResolvable | ConnectRoutingProfileManualAssignmentQueueConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putManualAssignmentQueueConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>[]

---

##### `putMediaConcurrencies` <a name="putMediaConcurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies"></a>

```typescript
public putMediaConcurrencies(value: IResolvable | ConnectRoutingProfileMediaConcurrencies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]

---

##### `putQueueConfigs` <a name="putQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs"></a>

```typescript
public putQueueConfigs(value: IResolvable | ConnectRoutingProfileQueueConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putTags"></a>

```typescript
public putTags(value: IResolvable | ConnectRoutingProfileTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>[]

---

##### `resetAgentAvailabilityTimer` <a name="resetAgentAvailabilityTimer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetAgentAvailabilityTimer"></a>

```typescript
public resetAgentAvailabilityTimer(): void
```

##### `resetManualAssignmentQueueConfigs` <a name="resetManualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetManualAssignmentQueueConfigs"></a>

```typescript
public resetManualAssignmentQueueConfigs(): void
```

##### `resetQueueConfigs` <a name="resetQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetQueueConfigs"></a>

```typescript
public resetQueueConfigs(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectRoutingProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isConstruct"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

connectRoutingProfile.ConnectRoutingProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

connectRoutingProfile.ConnectRoutingProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

connectRoutingProfile.ConnectRoutingProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectRoutingProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectRoutingProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectRoutingProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectRoutingProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigs">manualAssignmentQueueConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList">ConnectRoutingProfileManualAssignmentQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrencies">mediaConcurrencies</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList">ConnectRoutingProfileMediaConcurrenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigs">queueConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList">ConnectRoutingProfileQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.routingProfileArn">routingProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList">ConnectRoutingProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimerInput">agentAvailabilityTimerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArnInput">defaultOutboundQueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigsInput">manualAssignmentQueueConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrenciesInput">mediaConcurrenciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsInput">queueConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimer">agentAvailabilityTimer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArn">defaultOutboundQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `manualAssignmentQueueConfigs`<sup>Required</sup> <a name="manualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigs"></a>

```typescript
public readonly manualAssignmentQueueConfigs: ConnectRoutingProfileManualAssignmentQueueConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList">ConnectRoutingProfileManualAssignmentQueueConfigsList</a>

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="mediaConcurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrencies"></a>

```typescript
public readonly mediaConcurrencies: ConnectRoutingProfileMediaConcurrenciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList">ConnectRoutingProfileMediaConcurrenciesList</a>

---

##### `queueConfigs`<sup>Required</sup> <a name="queueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigs"></a>

```typescript
public readonly queueConfigs: ConnectRoutingProfileQueueConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList">ConnectRoutingProfileQueueConfigsList</a>

---

##### `routingProfileArn`<sup>Required</sup> <a name="routingProfileArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.routingProfileArn"></a>

```typescript
public readonly routingProfileArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tags"></a>

```typescript
public readonly tags: ConnectRoutingProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList">ConnectRoutingProfileTagsList</a>

---

##### `agentAvailabilityTimerInput`<sup>Optional</sup> <a name="agentAvailabilityTimerInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimerInput"></a>

```typescript
public readonly agentAvailabilityTimerInput: string;
```

- *Type:* string

---

##### `defaultOutboundQueueArnInput`<sup>Optional</sup> <a name="defaultOutboundQueueArnInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArnInput"></a>

```typescript
public readonly defaultOutboundQueueArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `manualAssignmentQueueConfigsInput`<sup>Optional</sup> <a name="manualAssignmentQueueConfigsInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigsInput"></a>

```typescript
public readonly manualAssignmentQueueConfigsInput: IResolvable | ConnectRoutingProfileManualAssignmentQueueConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>[]

---

##### `mediaConcurrenciesInput`<sup>Optional</sup> <a name="mediaConcurrenciesInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrenciesInput"></a>

```typescript
public readonly mediaConcurrenciesInput: IResolvable | ConnectRoutingProfileMediaConcurrencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queueConfigsInput`<sup>Optional</sup> <a name="queueConfigsInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsInput"></a>

```typescript
public readonly queueConfigsInput: IResolvable | ConnectRoutingProfileQueueConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConnectRoutingProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>[]

---

##### `agentAvailabilityTimer`<sup>Required</sup> <a name="agentAvailabilityTimer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimer"></a>

```typescript
public readonly agentAvailabilityTimer: string;
```

- *Type:* string

---

##### `defaultOutboundQueueArn`<sup>Required</sup> <a name="defaultOutboundQueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArn"></a>

```typescript
public readonly defaultOutboundQueueArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectRoutingProfileConfig <a name="ConnectRoutingProfileConfig" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

const connectRoutingProfileConfig: connectRoutingProfile.ConnectRoutingProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.defaultOutboundQueueArn">defaultOutboundQueueArn</a></code> | <code>string</code> | The identifier of the default outbound queue for this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.description">description</a></code> | <code>string</code> | The description of the routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.mediaConcurrencies">mediaConcurrencies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]</code> | The channels agents can handle in the Contact Control Panel (CCP) for this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.name">name</a></code> | <code>string</code> | The name of the routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.agentAvailabilityTimer">agentAvailabilityTimer</a></code> | <code>string</code> | Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.manualAssignmentQueueConfigs">manualAssignmentQueueConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>[]</code> | The manual assignment queues to associate with this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.queueConfigs">queueConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]</code> | The queues to associate with this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `defaultOutboundQueueArn`<sup>Required</sup> <a name="defaultOutboundQueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.defaultOutboundQueueArn"></a>

```typescript
public readonly defaultOutboundQueueArn: string;
```

- *Type:* string

The identifier of the default outbound queue for this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#default_outbound_queue_arn ConnectRoutingProfile#default_outbound_queue_arn}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#description ConnectRoutingProfile#description}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#instance_arn ConnectRoutingProfile#instance_arn}

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="mediaConcurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.mediaConcurrencies"></a>

```typescript
public readonly mediaConcurrencies: IResolvable | ConnectRoutingProfileMediaConcurrencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]

The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#media_concurrencies ConnectRoutingProfile#media_concurrencies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#name ConnectRoutingProfile#name}

---

##### `agentAvailabilityTimer`<sup>Optional</sup> <a name="agentAvailabilityTimer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.agentAvailabilityTimer"></a>

```typescript
public readonly agentAvailabilityTimer: string;
```

- *Type:* string

Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#agent_availability_timer ConnectRoutingProfile#agent_availability_timer}

---

##### `manualAssignmentQueueConfigs`<sup>Optional</sup> <a name="manualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.manualAssignmentQueueConfigs"></a>

```typescript
public readonly manualAssignmentQueueConfigs: IResolvable | ConnectRoutingProfileManualAssignmentQueueConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>[]

The manual assignment queues to associate with this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#manual_assignment_queue_configs ConnectRoutingProfile#manual_assignment_queue_configs}

---

##### `queueConfigs`<sup>Optional</sup> <a name="queueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.queueConfigs"></a>

```typescript
public readonly queueConfigs: IResolvable | ConnectRoutingProfileQueueConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]

The queues to associate with this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#queue_configs ConnectRoutingProfile#queue_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConnectRoutingProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#tags ConnectRoutingProfile#tags}

---

### ConnectRoutingProfileManualAssignmentQueueConfigs <a name="ConnectRoutingProfileManualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

const connectRoutingProfileManualAssignmentQueueConfigs: connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs.property.queueReference">queueReference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a></code> | Contains the channel and queue identifier for a routing profile. |

---

##### `queueReference`<sup>Optional</sup> <a name="queueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs.property.queueReference"></a>

```typescript
public readonly queueReference: ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

Contains the channel and queue identifier for a routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#queue_reference ConnectRoutingProfile#queue_reference}

---

### ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference <a name="ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

const connectRoutingProfileManualAssignmentQueueConfigsQueueReference: connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.channel">channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.queueArn">queueArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the queue. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}

---

##### `queueArn`<sup>Optional</sup> <a name="queueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#queue_arn ConnectRoutingProfile#queue_arn}

---

### ConnectRoutingProfileMediaConcurrencies <a name="ConnectRoutingProfileMediaConcurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

const connectRoutingProfileMediaConcurrencies: connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.channel">channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.concurrency">concurrency</a></code> | <code>number</code> | The number of contacts an agent can have on a channel simultaneously. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.crossChannelBehavior">crossChannelBehavior</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a></code> | Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.concurrency"></a>

```typescript
public readonly concurrency: number;
```

- *Type:* number

The number of contacts an agent can have on a channel simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#concurrency ConnectRoutingProfile#concurrency}

---

##### `crossChannelBehavior`<sup>Optional</sup> <a name="crossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.crossChannelBehavior"></a>

```typescript
public readonly crossChannelBehavior: ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#cross_channel_behavior ConnectRoutingProfile#cross_channel_behavior}

---

### ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior <a name="ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

const connectRoutingProfileMediaConcurrenciesCrossChannelBehavior: connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior.property.behaviorType">behaviorType</a></code> | <code>string</code> | Specifies the other channels that can be routed to an agent handling their current channel. |

---

##### `behaviorType`<sup>Optional</sup> <a name="behaviorType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior.property.behaviorType"></a>

```typescript
public readonly behaviorType: string;
```

- *Type:* string

Specifies the other channels that can be routed to an agent handling their current channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#behavior_type ConnectRoutingProfile#behavior_type}

---

### ConnectRoutingProfileQueueConfigs <a name="ConnectRoutingProfileQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

const connectRoutingProfileQueueConfigs: connectRoutingProfile.ConnectRoutingProfileQueueConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.delay">delay</a></code> | <code>number</code> | The delay, in seconds, a contact should wait in the queue before they are routed to an available agent. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.priority">priority</a></code> | <code>number</code> | The order in which contacts are to be handled for the queue. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.queueReference">queueReference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a></code> | Contains the channel and queue identifier for a routing profile. |

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

The delay, in seconds, a contact should wait in the queue before they are routed to an available agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#delay ConnectRoutingProfile#delay}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The order in which contacts are to be handled for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#priority ConnectRoutingProfile#priority}

---

##### `queueReference`<sup>Optional</sup> <a name="queueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.queueReference"></a>

```typescript
public readonly queueReference: ConnectRoutingProfileQueueConfigsQueueReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

Contains the channel and queue identifier for a routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#queue_reference ConnectRoutingProfile#queue_reference}

---

### ConnectRoutingProfileQueueConfigsQueueReference <a name="ConnectRoutingProfileQueueConfigsQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

const connectRoutingProfileQueueConfigsQueueReference: connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.channel">channel</a></code> | <code>string</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.queueArn">queueArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the queue. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}

---

##### `queueArn`<sup>Optional</sup> <a name="queueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#queue_arn ConnectRoutingProfile#queue_arn}

---

### ConnectRoutingProfileTags <a name="ConnectRoutingProfileTags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

const connectRoutingProfileTags: connectRoutingProfile.ConnectRoutingProfileTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#key ConnectRoutingProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#value ConnectRoutingProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectRoutingProfileManualAssignmentQueueConfigsList <a name="ConnectRoutingProfileManualAssignmentQueueConfigsList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

new connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.get"></a>

```typescript
public get(index: number): ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectRoutingProfileManualAssignmentQueueConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>[]

---


### ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference <a name="ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

new connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.putQueueReference">putQueueReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resetQueueReference">resetQueueReference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQueueReference` <a name="putQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.putQueueReference"></a>

```typescript
public putQueueReference(value: ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.putQueueReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

---

##### `resetQueueReference` <a name="resetQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resetQueueReference"></a>

```typescript
public resetQueueReference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReference">queueReference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReferenceInput">queueReferenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queueReference`<sup>Required</sup> <a name="queueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReference"></a>

```typescript
public readonly queueReference: ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference</a>

---

##### `queueReferenceInput`<sup>Optional</sup> <a name="queueReferenceInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReferenceInput"></a>

```typescript
public readonly queueReferenceInput: IResolvable | ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectRoutingProfileManualAssignmentQueueConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>

---


### ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference <a name="ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

new connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetQueueArn">resetQueueArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetChannel"></a>

```typescript
public resetChannel(): void
```

##### `resetQueueArn` <a name="resetQueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetQueueArn"></a>

```typescript
public resetQueueArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArnInput">queueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArn">queueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `queueArnInput`<sup>Optional</sup> <a name="queueArnInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArnInput"></a>

```typescript
public readonly queueArnInput: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

---


### ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference <a name="ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

new connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resetBehaviorType">resetBehaviorType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBehaviorType` <a name="resetBehaviorType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resetBehaviorType"></a>

```typescript
public resetBehaviorType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorTypeInput">behaviorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorType">behaviorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorTypeInput`<sup>Optional</sup> <a name="behaviorTypeInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorTypeInput"></a>

```typescript
public readonly behaviorTypeInput: string;
```

- *Type:* string

---

##### `behaviorType`<sup>Required</sup> <a name="behaviorType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorType"></a>

```typescript
public readonly behaviorType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

---


### ConnectRoutingProfileMediaConcurrenciesList <a name="ConnectRoutingProfileMediaConcurrenciesList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

new connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get"></a>

```typescript
public get(index: number): ConnectRoutingProfileMediaConcurrenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectRoutingProfileMediaConcurrencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>[]

---


### ConnectRoutingProfileMediaConcurrenciesOutputReference <a name="ConnectRoutingProfileMediaConcurrenciesOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

new connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.putCrossChannelBehavior">putCrossChannelBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resetCrossChannelBehavior">resetCrossChannelBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrossChannelBehavior` <a name="putCrossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.putCrossChannelBehavior"></a>

```typescript
public putCrossChannelBehavior(value: ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.putCrossChannelBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

---

##### `resetCrossChannelBehavior` <a name="resetCrossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resetCrossChannelBehavior"></a>

```typescript
public resetCrossChannelBehavior(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehavior">crossChannelBehavior</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrencyInput">concurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehaviorInput">crossChannelBehaviorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency">concurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossChannelBehavior`<sup>Required</sup> <a name="crossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehavior"></a>

```typescript
public readonly crossChannelBehavior: ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference</a>

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `concurrencyInput`<sup>Optional</sup> <a name="concurrencyInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrencyInput"></a>

```typescript
public readonly concurrencyInput: number;
```

- *Type:* number

---

##### `crossChannelBehaviorInput`<sup>Optional</sup> <a name="crossChannelBehaviorInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehaviorInput"></a>

```typescript
public readonly crossChannelBehaviorInput: IResolvable | ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency"></a>

```typescript
public readonly concurrency: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectRoutingProfileMediaConcurrencies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>

---


### ConnectRoutingProfileQueueConfigsList <a name="ConnectRoutingProfileQueueConfigsList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

new connectRoutingProfile.ConnectRoutingProfileQueueConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get"></a>

```typescript
public get(index: number): ConnectRoutingProfileQueueConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectRoutingProfileQueueConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>[]

---


### ConnectRoutingProfileQueueConfigsOutputReference <a name="ConnectRoutingProfileQueueConfigsOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

new connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.putQueueReference">putQueueReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetDelay">resetDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetQueueReference">resetQueueReference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQueueReference` <a name="putQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.putQueueReference"></a>

```typescript
public putQueueReference(value: ConnectRoutingProfileQueueConfigsQueueReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.putQueueReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

---

##### `resetDelay` <a name="resetDelay" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetDelay"></a>

```typescript
public resetDelay(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetQueueReference` <a name="resetQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetQueueReference"></a>

```typescript
public resetQueueReference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReference">queueReference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delayInput">delayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReferenceInput">queueReferenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delay">delay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queueReference`<sup>Required</sup> <a name="queueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReference"></a>

```typescript
public readonly queueReference: ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference</a>

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delayInput"></a>

```typescript
public readonly delayInput: number;
```

- *Type:* number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `queueReferenceInput`<sup>Optional</sup> <a name="queueReferenceInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReferenceInput"></a>

```typescript
public readonly queueReferenceInput: IResolvable | ConnectRoutingProfileQueueConfigsQueueReference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectRoutingProfileQueueConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>

---


### ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference <a name="ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

new connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetQueueArn">resetQueueArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetChannel"></a>

```typescript
public resetChannel(): void
```

##### `resetQueueArn` <a name="resetQueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetQueueArn"></a>

```typescript
public resetQueueArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArnInput">queueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArn">queueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `queueArnInput`<sup>Optional</sup> <a name="queueArnInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArnInput"></a>

```typescript
public readonly queueArnInput: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectRoutingProfileQueueConfigsQueueReference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

---


### ConnectRoutingProfileTagsList <a name="ConnectRoutingProfileTagsList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

new connectRoutingProfile.ConnectRoutingProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.get"></a>

```typescript
public get(index: number): ConnectRoutingProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectRoutingProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>[]

---


### ConnectRoutingProfileTagsOutputReference <a name="ConnectRoutingProfileTagsOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer"></a>

```typescript
import { connectRoutingProfile } from '@cdktn/provider-awscc'

new connectRoutingProfile.ConnectRoutingProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectRoutingProfileTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>

---



