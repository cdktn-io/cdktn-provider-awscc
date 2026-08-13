# `eventsApiDestination` Submodule <a name="`eventsApiDestination` Submodule" id="@cdktn/provider-awscc.eventsApiDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsApiDestination <a name="EventsApiDestination" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_api_destination awscc_events_api_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.Initializer"></a>

```typescript
import { eventsApiDestination } from '@cdktn/provider-awscc'

new eventsApiDestination.EventsApiDestination(scope: Construct, id: string, config: EventsApiDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig">EventsApiDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig">EventsApiDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.resetInvocationRateLimitPerSecond">resetInvocationRateLimitPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInvocationRateLimitPerSecond` <a name="resetInvocationRateLimitPerSecond" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.resetInvocationRateLimitPerSecond"></a>

```typescript
public resetInvocationRateLimitPerSecond(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EventsApiDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.isConstruct"></a>

```typescript
import { eventsApiDestination } from '@cdktn/provider-awscc'

eventsApiDestination.EventsApiDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.isTerraformElement"></a>

```typescript
import { eventsApiDestination } from '@cdktn/provider-awscc'

eventsApiDestination.EventsApiDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.isTerraformResource"></a>

```typescript
import { eventsApiDestination } from '@cdktn/provider-awscc'

eventsApiDestination.EventsApiDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.generateConfigForImport"></a>

```typescript
import { eventsApiDestination } from '@cdktn/provider-awscc'

eventsApiDestination.EventsApiDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EventsApiDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventsApiDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventsApiDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_api_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EventsApiDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.arnForPolicy">arnForPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.connectionArnInput">connectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.invocationEndpointInput">invocationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.invocationRateLimitPerSecondInput">invocationRateLimitPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.connectionArn">connectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.invocationEndpoint">invocationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.invocationRateLimitPerSecond">invocationRateLimitPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `arnForPolicy`<sup>Required</sup> <a name="arnForPolicy" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.arnForPolicy"></a>

```typescript
public readonly arnForPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `connectionArnInput`<sup>Optional</sup> <a name="connectionArnInput" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.connectionArnInput"></a>

```typescript
public readonly connectionArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `invocationEndpointInput`<sup>Optional</sup> <a name="invocationEndpointInput" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.invocationEndpointInput"></a>

```typescript
public readonly invocationEndpointInput: string;
```

- *Type:* string

---

##### `invocationRateLimitPerSecondInput`<sup>Optional</sup> <a name="invocationRateLimitPerSecondInput" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.invocationRateLimitPerSecondInput"></a>

```typescript
public readonly invocationRateLimitPerSecondInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.connectionArn"></a>

```typescript
public readonly connectionArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `invocationEndpoint`<sup>Required</sup> <a name="invocationEndpoint" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.invocationEndpoint"></a>

```typescript
public readonly invocationEndpoint: string;
```

- *Type:* string

---

##### `invocationRateLimitPerSecond`<sup>Required</sup> <a name="invocationRateLimitPerSecond" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.invocationRateLimitPerSecond"></a>

```typescript
public readonly invocationRateLimitPerSecond: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventsApiDestinationConfig <a name="EventsApiDestinationConfig" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.Initializer"></a>

```typescript
import { eventsApiDestination } from '@cdktn/provider-awscc'

const eventsApiDestinationConfig: eventsApiDestination.EventsApiDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.connectionArn">connectionArn</a></code> | <code>string</code> | The arn of the connection. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.httpMethod">httpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_api_destination#http_method EventsApiDestination#http_method}. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.invocationEndpoint">invocationEndpoint</a></code> | <code>string</code> | Url endpoint to invoke. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_api_destination#description EventsApiDestination#description}. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.invocationRateLimitPerSecond">invocationRateLimitPerSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_api_destination#invocation_rate_limit_per_second EventsApiDestination#invocation_rate_limit_per_second}. |
| <code><a href="#@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.name">name</a></code> | <code>string</code> | Name of the apiDestination. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.connectionArn"></a>

```typescript
public readonly connectionArn: string;
```

- *Type:* string

The arn of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_api_destination#connection_arn EventsApiDestination#connection_arn}

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_api_destination#http_method EventsApiDestination#http_method}.

---

##### `invocationEndpoint`<sup>Required</sup> <a name="invocationEndpoint" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.invocationEndpoint"></a>

```typescript
public readonly invocationEndpoint: string;
```

- *Type:* string

Url endpoint to invoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_api_destination#invocation_endpoint EventsApiDestination#invocation_endpoint}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_api_destination#description EventsApiDestination#description}.

---

##### `invocationRateLimitPerSecond`<sup>Optional</sup> <a name="invocationRateLimitPerSecond" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.invocationRateLimitPerSecond"></a>

```typescript
public readonly invocationRateLimitPerSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_api_destination#invocation_rate_limit_per_second EventsApiDestination#invocation_rate_limit_per_second}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsApiDestination.EventsApiDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the apiDestination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/events_api_destination#name EventsApiDestination#name}

---



