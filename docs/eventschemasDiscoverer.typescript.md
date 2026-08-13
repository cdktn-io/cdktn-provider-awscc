# `eventschemasDiscoverer` Submodule <a name="`eventschemasDiscoverer` Submodule" id="@cdktn/provider-awscc.eventschemasDiscoverer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventschemasDiscoverer <a name="EventschemasDiscoverer" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer awscc_eventschemas_discoverer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer"></a>

```typescript
import { eventschemasDiscoverer } from '@cdktn/provider-awscc'

new eventschemasDiscoverer.EventschemasDiscoverer(scope: Construct, id: string, config: EventschemasDiscovererConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig">EventschemasDiscovererConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig">EventschemasDiscovererConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetCrossAccount">resetCrossAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.putTags"></a>

```typescript
public putTags(value: IResolvable | EventschemasDiscovererTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>[]

---

##### `resetCrossAccount` <a name="resetCrossAccount" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetCrossAccount"></a>

```typescript
public resetCrossAccount(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EventschemasDiscoverer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isConstruct"></a>

```typescript
import { eventschemasDiscoverer } from '@cdktn/provider-awscc'

eventschemasDiscoverer.EventschemasDiscoverer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformElement"></a>

```typescript
import { eventschemasDiscoverer } from '@cdktn/provider-awscc'

eventschemasDiscoverer.EventschemasDiscoverer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformResource"></a>

```typescript
import { eventschemasDiscoverer } from '@cdktn/provider-awscc'

eventschemasDiscoverer.EventschemasDiscoverer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport"></a>

```typescript
import { eventschemasDiscoverer } from '@cdktn/provider-awscc'

eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EventschemasDiscoverer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventschemasDiscoverer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventschemasDiscoverer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EventschemasDiscoverer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.discovererArn">discovererArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.discovererId">discovererId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList">EventschemasDiscovererTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.crossAccountInput">crossAccountInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.sourceArnInput">sourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.crossAccount">crossAccount</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `discovererArn`<sup>Required</sup> <a name="discovererArn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.discovererArn"></a>

```typescript
public readonly discovererArn: string;
```

- *Type:* string

---

##### `discovererId`<sup>Required</sup> <a name="discovererId" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.discovererId"></a>

```typescript
public readonly discovererId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tags"></a>

```typescript
public readonly tags: EventschemasDiscovererTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList">EventschemasDiscovererTagsList</a>

---

##### `crossAccountInput`<sup>Optional</sup> <a name="crossAccountInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.crossAccountInput"></a>

```typescript
public readonly crossAccountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.sourceArnInput"></a>

```typescript
public readonly sourceArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | EventschemasDiscovererTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>[]

---

##### `crossAccount`<sup>Required</sup> <a name="crossAccount" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.crossAccount"></a>

```typescript
public readonly crossAccount: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscoverer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventschemasDiscovererConfig <a name="EventschemasDiscovererConfig" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.Initializer"></a>

```typescript
import { eventschemasDiscoverer } from '@cdktn/provider-awscc'

const eventschemasDiscovererConfig: eventschemasDiscoverer.EventschemasDiscovererConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.sourceArn">sourceArn</a></code> | <code>string</code> | The ARN of the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.crossAccount">crossAccount</a></code> | <code>boolean \| cdktn.IResolvable</code> | Defines whether event schemas from other accounts are discovered. Default is True. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.description">description</a></code> | <code>string</code> | A description for the discoverer. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>[]</code> | Tags associated with the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

The ARN of the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#source_arn EventschemasDiscoverer#source_arn}

---

##### `crossAccount`<sup>Optional</sup> <a name="crossAccount" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.crossAccount"></a>

```typescript
public readonly crossAccount: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Defines whether event schemas from other accounts are discovered. Default is True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#cross_account EventschemasDiscoverer#cross_account}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the discoverer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#description EventschemasDiscoverer#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | EventschemasDiscovererTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>[]

Tags associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#tags EventschemasDiscoverer#tags}

---

### EventschemasDiscovererTags <a name="EventschemasDiscovererTags" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.Initializer"></a>

```typescript
import { eventschemasDiscoverer } from '@cdktn/provider-awscc'

const eventschemasDiscovererTags: eventschemasDiscoverer.EventschemasDiscovererTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#key EventschemasDiscoverer#key}. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#value EventschemasDiscoverer#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#key EventschemasDiscoverer#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eventschemas_discoverer#value EventschemasDiscoverer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventschemasDiscovererTagsList <a name="EventschemasDiscovererTagsList" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer"></a>

```typescript
import { eventschemasDiscoverer } from '@cdktn/provider-awscc'

new eventschemasDiscoverer.EventschemasDiscovererTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.get"></a>

```typescript
public get(index: number): EventschemasDiscovererTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventschemasDiscovererTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>[]

---


### EventschemasDiscovererTagsOutputReference <a name="EventschemasDiscovererTagsOutputReference" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer"></a>

```typescript
import { eventschemasDiscoverer } from '@cdktn/provider-awscc'

new eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventschemasDiscovererTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventschemasDiscoverer.EventschemasDiscovererTags">EventschemasDiscovererTags</a>

---



