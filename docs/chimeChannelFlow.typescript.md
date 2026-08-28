# `chimeChannelFlow` Submodule <a name="`chimeChannelFlow` Submodule" id="@cdktn/provider-awscc.chimeChannelFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeChannelFlow <a name="ChimeChannelFlow" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow awscc_chime_channel_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

new chimeChannelFlow.ChimeChannelFlow(scope: Construct, id: string, config: ChimeChannelFlowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig">ChimeChannelFlowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig">ChimeChannelFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putProcessors">putProcessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProcessors` <a name="putProcessors" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putProcessors"></a>

```typescript
public putProcessors(value: IResolvable | ChimeChannelFlowProcessors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putProcessors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putTags"></a>

```typescript
public putTags(value: IResolvable | ChimeChannelFlowTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeChannelFlow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isConstruct"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

chimeChannelFlow.ChimeChannelFlow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformElement"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

chimeChannelFlow.ChimeChannelFlow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformResource"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

chimeChannelFlow.ChimeChannelFlow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

chimeChannelFlow.ChimeChannelFlow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChimeChannelFlow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeChannelFlow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeChannelFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChimeChannelFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceId">appInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.channelFlowId">channelFlowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.processors">processors</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList">ChimeChannelFlowProcessorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList">ChimeChannelFlowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceArnInput">appInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.processorsInput">processorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appInstanceId`<sup>Required</sup> <a name="appInstanceId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceId"></a>

```typescript
public readonly appInstanceId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `channelFlowId`<sup>Required</sup> <a name="channelFlowId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.channelFlowId"></a>

```typescript
public readonly channelFlowId: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.lastUpdatedTimestamp"></a>

```typescript
public readonly lastUpdatedTimestamp: string;
```

- *Type:* string

---

##### `processors`<sup>Required</sup> <a name="processors" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.processors"></a>

```typescript
public readonly processors: ChimeChannelFlowProcessorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList">ChimeChannelFlowProcessorsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tags"></a>

```typescript
public readonly tags: ChimeChannelFlowTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList">ChimeChannelFlowTagsList</a>

---

##### `appInstanceArnInput`<sup>Optional</sup> <a name="appInstanceArnInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceArnInput"></a>

```typescript
public readonly appInstanceArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `processorsInput`<sup>Optional</sup> <a name="processorsInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.processorsInput"></a>

```typescript
public readonly processorsInput: IResolvable | ChimeChannelFlowProcessors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ChimeChannelFlowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>[]

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeChannelFlowConfig <a name="ChimeChannelFlowConfig" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.Initializer"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

const chimeChannelFlowConfig: chimeChannelFlow.ChimeChannelFlowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | The ARN of the app instance. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.name">name</a></code> | <code>string</code> | The name of the channel flow. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.processors">processors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>[]</code> | Information about the processor Lambda functions. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>[]</code> | The tags for the channel flow. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string

The ARN of the app instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#app_instance_arn ChimeChannelFlow#app_instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the channel flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#name ChimeChannelFlow#name}

---

##### `processors`<sup>Required</sup> <a name="processors" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.processors"></a>

```typescript
public readonly processors: IResolvable | ChimeChannelFlowProcessors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>[]

Information about the processor Lambda functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#processors ChimeChannelFlow#processors}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ChimeChannelFlowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>[]

The tags for the channel flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#tags ChimeChannelFlow#tags}

---

### ChimeChannelFlowProcessors <a name="ChimeChannelFlowProcessors" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.Initializer"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

const chimeChannelFlowProcessors: chimeChannelFlow.ChimeChannelFlowProcessors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a></code> | A processor's metadata. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.executionOrder">executionOrder</a></code> | <code>number</code> | The sequence in which processors run. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.fallbackAction">fallbackAction</a></code> | <code>string</code> | Determines whether to continue or stop processing when communication with a processor fails. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.name">name</a></code> | <code>string</code> | The name of the processor. |

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.configuration"></a>

```typescript
public readonly configuration: ChimeChannelFlowProcessorsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a>

A processor's metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#configuration ChimeChannelFlow#configuration}

---

##### `executionOrder`<sup>Required</sup> <a name="executionOrder" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.executionOrder"></a>

```typescript
public readonly executionOrder: number;
```

- *Type:* number

The sequence in which processors run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#execution_order ChimeChannelFlow#execution_order}

---

##### `fallbackAction`<sup>Required</sup> <a name="fallbackAction" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.fallbackAction"></a>

```typescript
public readonly fallbackAction: string;
```

- *Type:* string

Determines whether to continue or stop processing when communication with a processor fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#fallback_action ChimeChannelFlow#fallback_action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#name ChimeChannelFlow#name}

---

### ChimeChannelFlowProcessorsConfiguration <a name="ChimeChannelFlowProcessorsConfiguration" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration.Initializer"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

const chimeChannelFlowProcessorsConfiguration: chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a></code> | Stores metadata about a Lambda processor. |

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration.property.lambda"></a>

```typescript
public readonly lambda: ChimeChannelFlowProcessorsConfigurationLambda;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a>

Stores metadata about a Lambda processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#lambda ChimeChannelFlow#lambda}

---

### ChimeChannelFlowProcessorsConfigurationLambda <a name="ChimeChannelFlowProcessorsConfigurationLambda" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.Initializer"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

const chimeChannelFlowProcessorsConfigurationLambda: chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.property.invocationType">invocationType</a></code> | <code>string</code> | Controls how the Lambda function is invoked. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.property.resourceArn">resourceArn</a></code> | <code>string</code> | The ARN of the Lambda message processing function. |

---

##### `invocationType`<sup>Required</sup> <a name="invocationType" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.property.invocationType"></a>

```typescript
public readonly invocationType: string;
```

- *Type:* string

Controls how the Lambda function is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#invocation_type ChimeChannelFlow#invocation_type}

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

The ARN of the Lambda message processing function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#resource_arn ChimeChannelFlow#resource_arn}

---

### ChimeChannelFlowTags <a name="ChimeChannelFlowTags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.Initializer"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

const chimeChannelFlowTags: chimeChannelFlow.ChimeChannelFlowTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.property.key">key</a></code> | <code>string</code> | The key in a tag. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.property.value">value</a></code> | <code>string</code> | The value in a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#key ChimeChannelFlow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#value ChimeChannelFlow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeChannelFlowProcessorsConfigurationLambdaOutputReference <a name="ChimeChannelFlowProcessorsConfigurationLambdaOutputReference" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

new chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.invocationTypeInput">invocationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.invocationType">invocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `invocationTypeInput`<sup>Optional</sup> <a name="invocationTypeInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.invocationTypeInput"></a>

```typescript
public readonly invocationTypeInput: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `invocationType`<sup>Required</sup> <a name="invocationType" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.invocationType"></a>

```typescript
public readonly invocationType: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeChannelFlowProcessorsConfigurationLambda;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a>

---


### ChimeChannelFlowProcessorsConfigurationOutputReference <a name="ChimeChannelFlowProcessorsConfigurationOutputReference" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

new chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.putLambda">putLambda</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambda` <a name="putLambda" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.putLambda"></a>

```typescript
public putLambda(value: ChimeChannelFlowProcessorsConfigurationLambda): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference">ChimeChannelFlowProcessorsConfigurationLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.lambdaInput">lambdaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.lambda"></a>

```typescript
public readonly lambda: ChimeChannelFlowProcessorsConfigurationLambdaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference">ChimeChannelFlowProcessorsConfigurationLambdaOutputReference</a>

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.lambdaInput"></a>

```typescript
public readonly lambdaInput: IResolvable | ChimeChannelFlowProcessorsConfigurationLambda;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeChannelFlowProcessorsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a>

---


### ChimeChannelFlowProcessorsList <a name="ChimeChannelFlowProcessorsList" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

new chimeChannelFlow.ChimeChannelFlowProcessorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.get"></a>

```typescript
public get(index: number): ChimeChannelFlowProcessorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeChannelFlowProcessors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>[]

---


### ChimeChannelFlowProcessorsOutputReference <a name="ChimeChannelFlowProcessorsOutputReference" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

new chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.putConfiguration">putConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.putConfiguration"></a>

```typescript
public putConfiguration(value: ChimeChannelFlowProcessorsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference">ChimeChannelFlowProcessorsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.configurationInput">configurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.executionOrderInput">executionOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fallbackActionInput">fallbackActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.executionOrder">executionOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fallbackAction">fallbackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.configuration"></a>

```typescript
public readonly configuration: ChimeChannelFlowProcessorsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference">ChimeChannelFlowProcessorsConfigurationOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | ChimeChannelFlowProcessorsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a>

---

##### `executionOrderInput`<sup>Optional</sup> <a name="executionOrderInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.executionOrderInput"></a>

```typescript
public readonly executionOrderInput: number;
```

- *Type:* number

---

##### `fallbackActionInput`<sup>Optional</sup> <a name="fallbackActionInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fallbackActionInput"></a>

```typescript
public readonly fallbackActionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `executionOrder`<sup>Required</sup> <a name="executionOrder" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.executionOrder"></a>

```typescript
public readonly executionOrder: number;
```

- *Type:* number

---

##### `fallbackAction`<sup>Required</sup> <a name="fallbackAction" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fallbackAction"></a>

```typescript
public readonly fallbackAction: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeChannelFlowProcessors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>

---


### ChimeChannelFlowTagsList <a name="ChimeChannelFlowTagsList" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

new chimeChannelFlow.ChimeChannelFlowTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.get"></a>

```typescript
public get(index: number): ChimeChannelFlowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeChannelFlowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>[]

---


### ChimeChannelFlowTagsOutputReference <a name="ChimeChannelFlowTagsOutputReference" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer"></a>

```typescript
import { chimeChannelFlow } from '@cdktn/provider-awscc'

new chimeChannelFlow.ChimeChannelFlowTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeChannelFlowTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>

---



