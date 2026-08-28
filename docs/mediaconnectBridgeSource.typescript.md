# `mediaconnectBridgeSource` Submodule <a name="`mediaconnectBridgeSource` Submodule" id="@cdktn/provider-awscc.mediaconnectBridgeSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectBridgeSource <a name="MediaconnectBridgeSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source awscc_mediaconnect_bridge_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer"></a>

```typescript
import { mediaconnectBridgeSource } from '@cdktn/provider-awscc'

new mediaconnectBridgeSource.MediaconnectBridgeSource(scope: Construct, id: string, config: MediaconnectBridgeSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig">MediaconnectBridgeSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig">MediaconnectBridgeSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putFlowSource">putFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putNetworkSource">putNetworkSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetFlowSource">resetFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetNetworkSource">resetNetworkSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFlowSource` <a name="putFlowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putFlowSource"></a>

```typescript
public putFlowSource(value: MediaconnectBridgeSourceFlowSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putFlowSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a>

---

##### `putNetworkSource` <a name="putNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putNetworkSource"></a>

```typescript
public putNetworkSource(value: MediaconnectBridgeSourceNetworkSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putNetworkSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a>

---

##### `resetFlowSource` <a name="resetFlowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetFlowSource"></a>

```typescript
public resetFlowSource(): void
```

##### `resetNetworkSource` <a name="resetNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetNetworkSource"></a>

```typescript
public resetNetworkSource(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectBridgeSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isConstruct"></a>

```typescript
import { mediaconnectBridgeSource } from '@cdktn/provider-awscc'

mediaconnectBridgeSource.MediaconnectBridgeSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformElement"></a>

```typescript
import { mediaconnectBridgeSource } from '@cdktn/provider-awscc'

mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformResource"></a>

```typescript
import { mediaconnectBridgeSource } from '@cdktn/provider-awscc'

mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport"></a>

```typescript
import { mediaconnectBridgeSource } from '@cdktn/provider-awscc'

mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MediaconnectBridgeSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconnectBridgeSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconnectBridgeSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectBridgeSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.flowSource">flowSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference">MediaconnectBridgeSourceFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.networkSource">networkSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference">MediaconnectBridgeSourceNetworkSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.bridgeArnInput">bridgeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.flowSourceInput">flowSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.networkSourceInput">networkSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.bridgeArn">bridgeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `flowSource`<sup>Required</sup> <a name="flowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.flowSource"></a>

```typescript
public readonly flowSource: MediaconnectBridgeSourceFlowSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference">MediaconnectBridgeSourceFlowSourceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkSource`<sup>Required</sup> <a name="networkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.networkSource"></a>

```typescript
public readonly networkSource: MediaconnectBridgeSourceNetworkSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference">MediaconnectBridgeSourceNetworkSourceOutputReference</a>

---

##### `bridgeArnInput`<sup>Optional</sup> <a name="bridgeArnInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.bridgeArnInput"></a>

```typescript
public readonly bridgeArnInput: string;
```

- *Type:* string

---

##### `flowSourceInput`<sup>Optional</sup> <a name="flowSourceInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.flowSourceInput"></a>

```typescript
public readonly flowSourceInput: IResolvable | MediaconnectBridgeSourceFlowSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkSourceInput`<sup>Optional</sup> <a name="networkSourceInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.networkSourceInput"></a>

```typescript
public readonly networkSourceInput: IResolvable | MediaconnectBridgeSourceNetworkSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a>

---

##### `bridgeArn`<sup>Required</sup> <a name="bridgeArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.bridgeArn"></a>

```typescript
public readonly bridgeArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectBridgeSourceConfig <a name="MediaconnectBridgeSourceConfig" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.Initializer"></a>

```typescript
import { mediaconnectBridgeSource } from '@cdktn/provider-awscc'

const mediaconnectBridgeSourceConfig: mediaconnectBridgeSource.MediaconnectBridgeSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.bridgeArn">bridgeArn</a></code> | <code>string</code> | The Amazon Resource Number (ARN) of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.name">name</a></code> | <code>string</code> | The name of the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.flowSource">flowSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a></code> | The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.networkSource">networkSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a></code> | The source of the bridge. A network source originates at your premises. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bridgeArn`<sup>Required</sup> <a name="bridgeArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.bridgeArn"></a>

```typescript
public readonly bridgeArn: string;
```

- *Type:* string

The Amazon Resource Number (ARN) of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source#bridge_arn MediaconnectBridgeSource#bridge_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source#name MediaconnectBridgeSource#name}

---

##### `flowSource`<sup>Optional</sup> <a name="flowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.flowSource"></a>

```typescript
public readonly flowSource: MediaconnectBridgeSourceFlowSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a>

The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source#flow_source MediaconnectBridgeSource#flow_source}

---

##### `networkSource`<sup>Optional</sup> <a name="networkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.networkSource"></a>

```typescript
public readonly networkSource: MediaconnectBridgeSourceNetworkSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a>

The source of the bridge. A network source originates at your premises.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source#network_source MediaconnectBridgeSource#network_source}

---

### MediaconnectBridgeSourceFlowSource <a name="MediaconnectBridgeSourceFlowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.Initializer"></a>

```typescript
import { mediaconnectBridgeSource } from '@cdktn/provider-awscc'

const mediaconnectBridgeSourceFlowSource: mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.property.flowArn">flowArn</a></code> | <code>string</code> | The ARN of the cloud flow used as a source of this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.property.flowVpcInterfaceAttachment">flowVpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a></code> | The name of the VPC interface attachment to use for this source. |

---

##### `flowArn`<sup>Optional</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

The ARN of the cloud flow used as a source of this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source#flow_arn MediaconnectBridgeSource#flow_arn}

---

##### `flowVpcInterfaceAttachment`<sup>Optional</sup> <a name="flowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.property.flowVpcInterfaceAttachment"></a>

```typescript
public readonly flowVpcInterfaceAttachment: MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source#flow_vpc_interface_attachment MediaconnectBridgeSource#flow_vpc_interface_attachment}

---

### MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment <a name="MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment.Initializer"></a>

```typescript
import { mediaconnectBridgeSource } from '@cdktn/provider-awscc'

const mediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment: mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | The name of the VPC interface to use for this resource. |

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source#vpc_interface_name MediaconnectBridgeSource#vpc_interface_name}

---

### MediaconnectBridgeSourceNetworkSource <a name="MediaconnectBridgeSourceNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.Initializer"></a>

```typescript
import { mediaconnectBridgeSource } from '@cdktn/provider-awscc'

const mediaconnectBridgeSourceNetworkSource: mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.multicastIp">multicastIp</a></code> | <code>string</code> | The network source multicast IP. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.multicastSourceSettings">multicastSourceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a></code> | The settings related to the multicast source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.networkName">networkName</a></code> | <code>string</code> | The network source's gateway network name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.port">port</a></code> | <code>number</code> | The network source port. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.protocol">protocol</a></code> | <code>string</code> | The network source protocol. |

---

##### `multicastIp`<sup>Optional</sup> <a name="multicastIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.multicastIp"></a>

```typescript
public readonly multicastIp: string;
```

- *Type:* string

The network source multicast IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source#multicast_ip MediaconnectBridgeSource#multicast_ip}

---

##### `multicastSourceSettings`<sup>Optional</sup> <a name="multicastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.multicastSourceSettings"></a>

```typescript
public readonly multicastSourceSettings: MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a>

The settings related to the multicast source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source#multicast_source_settings MediaconnectBridgeSource#multicast_source_settings}

---

##### `networkName`<sup>Optional</sup> <a name="networkName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

The network source's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source#network_name MediaconnectBridgeSource#network_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The network source port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source#port MediaconnectBridgeSource#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The network source protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source#protocol MediaconnectBridgeSource#protocol}

---

### MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings <a name="MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings.Initializer"></a>

```typescript
import { mediaconnectBridgeSource } from '@cdktn/provider-awscc'

const mediaconnectBridgeSourceNetworkSourceMulticastSourceSettings: mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings.property.multicastSourceIp">multicastSourceIp</a></code> | <code>string</code> | The IP address of the source for source-specific multicast (SSM). |

---

##### `multicastSourceIp`<sup>Optional</sup> <a name="multicastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings.property.multicastSourceIp"></a>

```typescript
public readonly multicastSourceIp: string;
```

- *Type:* string

The IP address of the source for source-specific multicast (SSM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_bridge_source#multicast_source_ip MediaconnectBridgeSource#multicast_source_ip}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference <a name="MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridgeSource } from '@cdktn/provider-awscc'

new mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName">resetVpcInterfaceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcInterfaceName` <a name="resetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName"></a>

```typescript
public resetVpcInterfaceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput">vpcInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcInterfaceNameInput`<sup>Optional</sup> <a name="vpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput"></a>

```typescript
public readonly vpcInterfaceNameInput: string;
```

- *Type:* string

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a>

---


### MediaconnectBridgeSourceFlowSourceOutputReference <a name="MediaconnectBridgeSourceFlowSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridgeSource } from '@cdktn/provider-awscc'

new mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.putFlowVpcInterfaceAttachment">putFlowVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resetFlowArn">resetFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resetFlowVpcInterfaceAttachment">resetFlowVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFlowVpcInterfaceAttachment` <a name="putFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.putFlowVpcInterfaceAttachment"></a>

```typescript
public putFlowVpcInterfaceAttachment(value: MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.putFlowVpcInterfaceAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a>

---

##### `resetFlowArn` <a name="resetFlowArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resetFlowArn"></a>

```typescript
public resetFlowArn(): void
```

##### `resetFlowVpcInterfaceAttachment` <a name="resetFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resetFlowVpcInterfaceAttachment"></a>

```typescript
public resetFlowVpcInterfaceAttachment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachment">flowVpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowArnInput">flowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachmentInput">flowVpcInterfaceAttachmentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowArn">flowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowVpcInterfaceAttachment`<sup>Required</sup> <a name="flowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachment"></a>

```typescript
public readonly flowVpcInterfaceAttachment: MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference</a>

---

##### `flowArnInput`<sup>Optional</sup> <a name="flowArnInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowArnInput"></a>

```typescript
public readonly flowArnInput: string;
```

- *Type:* string

---

##### `flowVpcInterfaceAttachmentInput`<sup>Optional</sup> <a name="flowVpcInterfaceAttachmentInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachmentInput"></a>

```typescript
public readonly flowVpcInterfaceAttachmentInput: IResolvable | MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a>

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeSourceFlowSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a>

---


### MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference <a name="MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridgeSource } from '@cdktn/provider-awscc'

new mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resetMulticastSourceIp">resetMulticastSourceIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMulticastSourceIp` <a name="resetMulticastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resetMulticastSourceIp"></a>

```typescript
public resetMulticastSourceIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIpInput">multicastSourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp">multicastSourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multicastSourceIpInput`<sup>Optional</sup> <a name="multicastSourceIpInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIpInput"></a>

```typescript
public readonly multicastSourceIpInput: string;
```

- *Type:* string

---

##### `multicastSourceIp`<sup>Required</sup> <a name="multicastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp"></a>

```typescript
public readonly multicastSourceIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a>

---


### MediaconnectBridgeSourceNetworkSourceOutputReference <a name="MediaconnectBridgeSourceNetworkSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridgeSource } from '@cdktn/provider-awscc'

new mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.putMulticastSourceSettings">putMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetMulticastIp">resetMulticastIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetMulticastSourceSettings">resetMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetNetworkName">resetNetworkName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMulticastSourceSettings` <a name="putMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.putMulticastSourceSettings"></a>

```typescript
public putMulticastSourceSettings(value: MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.putMulticastSourceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a>

---

##### `resetMulticastIp` <a name="resetMulticastIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetMulticastIp"></a>

```typescript
public resetMulticastIp(): void
```

##### `resetMulticastSourceSettings` <a name="resetMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetMulticastSourceSettings"></a>

```typescript
public resetMulticastSourceSettings(): void
```

##### `resetNetworkName` <a name="resetNetworkName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetNetworkName"></a>

```typescript
public resetNetworkName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettings">multicastSourceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIpInput">multicastIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettingsInput">multicastSourceSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.networkNameInput">networkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIp">multicastIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.networkName">networkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multicastSourceSettings`<sup>Required</sup> <a name="multicastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettings"></a>

```typescript
public readonly multicastSourceSettings: MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference</a>

---

##### `multicastIpInput`<sup>Optional</sup> <a name="multicastIpInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIpInput"></a>

```typescript
public readonly multicastIpInput: string;
```

- *Type:* string

---

##### `multicastSourceSettingsInput`<sup>Optional</sup> <a name="multicastSourceSettingsInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettingsInput"></a>

```typescript
public readonly multicastSourceSettingsInput: IResolvable | MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a>

---

##### `networkNameInput`<sup>Optional</sup> <a name="networkNameInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.networkNameInput"></a>

```typescript
public readonly networkNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `multicastIp`<sup>Required</sup> <a name="multicastIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIp"></a>

```typescript
public readonly multicastIp: string;
```

- *Type:* string

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeSourceNetworkSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a>

---



