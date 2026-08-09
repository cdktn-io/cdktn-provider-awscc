# `eventsEventBusPolicy` Submodule <a name="`eventsEventBusPolicy` Submodule" id="@cdktn/provider-awscc.eventsEventBusPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsEventBusPolicy <a name="EventsEventBusPolicy" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy awscc_events_event_bus_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer"></a>

```typescript
import { eventsEventBusPolicy } from '@cdktn/provider-awscc'

new eventsEventBusPolicy.EventsEventBusPolicy(scope: Construct, id: string, config: EventsEventBusPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig">EventsEventBusPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig">EventsEventBusPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetEventBusName">resetEventBusName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetStatement">resetStatement</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.putCondition"></a>

```typescript
public putCondition(value: EventsEventBusPolicyCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetEventBusName` <a name="resetEventBusName" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetEventBusName"></a>

```typescript
public resetEventBusName(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```

##### `resetStatement` <a name="resetStatement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetStatement"></a>

```typescript
public resetStatement(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EventsEventBusPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isConstruct"></a>

```typescript
import { eventsEventBusPolicy } from '@cdktn/provider-awscc'

eventsEventBusPolicy.EventsEventBusPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformElement"></a>

```typescript
import { eventsEventBusPolicy } from '@cdktn/provider-awscc'

eventsEventBusPolicy.EventsEventBusPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformResource"></a>

```typescript
import { eventsEventBusPolicy } from '@cdktn/provider-awscc'

eventsEventBusPolicy.EventsEventBusPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport"></a>

```typescript
import { eventsEventBusPolicy } from '@cdktn/provider-awscc'

eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EventsEventBusPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventsEventBusPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventsEventBusPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EventsEventBusPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference">EventsEventBusPolicyConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.conditionInput">conditionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusNameInput">eventBusNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementIdInput">statementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementInput">statementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusName">eventBusName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statement">statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementId">statementId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.condition"></a>

```typescript
public readonly condition: EventsEventBusPolicyConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference">EventsEventBusPolicyConditionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | EventsEventBusPolicyCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

---

##### `eventBusNameInput`<sup>Optional</sup> <a name="eventBusNameInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusNameInput"></a>

```typescript
public readonly eventBusNameInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `statementIdInput`<sup>Optional</sup> <a name="statementIdInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementIdInput"></a>

```typescript
public readonly statementIdInput: string;
```

- *Type:* string

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementInput"></a>

```typescript
public readonly statementInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `eventBusName`<sup>Required</sup> <a name="eventBusName" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusName"></a>

```typescript
public readonly eventBusName: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementId"></a>

```typescript
public readonly statementId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventsEventBusPolicyCondition <a name="EventsEventBusPolicyCondition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.Initializer"></a>

```typescript
import { eventsEventBusPolicy } from '@cdktn/provider-awscc'

const eventsEventBusPolicyCondition: eventsEventBusPolicy.EventsEventBusPolicyCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.key">key</a></code> | <code>string</code> | Specifies the value for the key. Currently, this must be the ID of the organization. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.type">type</a></code> | <code>string</code> | Specifies the type of condition. Currently the only supported value is StringEquals. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.value">value</a></code> | <code>string</code> | Specifies the key for the condition. Currently the only supported key is aws:PrincipalOrgID. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Specifies the value for the key. Currently, this must be the ID of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#key EventsEventBusPolicy#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies the type of condition. Currently the only supported value is StringEquals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#type EventsEventBusPolicy#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Specifies the key for the condition. Currently the only supported key is aws:PrincipalOrgID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#value EventsEventBusPolicy#value}

---

### EventsEventBusPolicyConfig <a name="EventsEventBusPolicyConfig" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.Initializer"></a>

```typescript
import { eventsEventBusPolicy } from '@cdktn/provider-awscc'

const eventsEventBusPolicyConfig: eventsEventBusPolicy.EventsEventBusPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statementId">statementId</a></code> | <code>string</code> | An identifier string for the external account that you are granting permissions to. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.action">action</a></code> | <code>string</code> | The action that you are enabling the other account to perform. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a></code> | This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.eventBusName">eventBusName</a></code> | <code>string</code> | The name of the event bus associated with the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.principal">principal</a></code> | <code>string</code> | The 12-digit AWS account ID that you are permitting to put events to your default event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statement">statement</a></code> | <code>string</code> | A JSON string that describes the permission policy statement. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statementId"></a>

```typescript
public readonly statementId: string;
```

- *Type:* string

An identifier string for the external account that you are granting permissions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#statement_id EventsEventBusPolicy#statement_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The action that you are enabling the other account to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#action EventsEventBusPolicy#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.condition"></a>

```typescript
public readonly condition: EventsEventBusPolicyCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#condition EventsEventBusPolicy#condition}

---

##### `eventBusName`<sup>Optional</sup> <a name="eventBusName" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.eventBusName"></a>

```typescript
public readonly eventBusName: string;
```

- *Type:* string

The name of the event bus associated with the rule.

If you omit this, the default event bus is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#event_bus_name EventsEventBusPolicy#event_bus_name}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

The 12-digit AWS account ID that you are permitting to put events to your default event bus.

Specify "*" to permit any account to put events to your default event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#principal EventsEventBusPolicy#principal}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

A JSON string that describes the permission policy statement.

You can include a Policy parameter in the request instead of using the StatementId, Action, Principal, or Condition parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_event_bus_policy#statement EventsEventBusPolicy#statement}

---

## Classes <a name="Classes" id="Classes"></a>

### EventsEventBusPolicyConditionOutputReference <a name="EventsEventBusPolicyConditionOutputReference" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer"></a>

```typescript
import { eventsEventBusPolicy } from '@cdktn/provider-awscc'

new eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventsEventBusPolicyCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

---



