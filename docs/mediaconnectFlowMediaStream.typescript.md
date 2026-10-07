# `mediaconnectFlowMediaStream` Submodule <a name="`mediaconnectFlowMediaStream` Submodule" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlowMediaStream <a name="MediaconnectFlowMediaStream" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream awscc_mediaconnect_flow_media_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer"></a>

```typescript
import { mediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

new mediaconnectFlowMediaStream.MediaconnectFlowMediaStream(scope: Construct, id: string, config: MediaconnectFlowMediaStreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig">MediaconnectFlowMediaStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig">MediaconnectFlowMediaStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetClockRate">resetClockRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetVideoFormat">resetVideoFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putAttributes"></a>

```typescript
public putAttributes(value: MediaconnectFlowMediaStreamAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putTags"></a>

```typescript
public putTags(value: IResolvable | MediaconnectFlowMediaStreamTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>[]

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetClockRate` <a name="resetClockRate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetClockRate"></a>

```typescript
public resetClockRate(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVideoFormat` <a name="resetVideoFormat" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetVideoFormat"></a>

```typescript
public resetVideoFormat(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isConstruct"></a>

```typescript
import { mediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformElement"></a>

```typescript
import { mediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformResource"></a>

```typescript
import { mediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport"></a>

```typescript
import { mediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconnectFlowMediaStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconnectFlowMediaStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlowMediaStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference">MediaconnectFlowMediaStreamAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fmt">fmt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList">MediaconnectFlowMediaStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributesInput">attributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRateInput">clockRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArnInput">flowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamIdInput">mediaStreamIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamNameInput">mediaStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamTypeInput">mediaStreamTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormatInput">videoFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRate">clockRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArn">flowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamId">mediaStreamId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamName">mediaStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamType">mediaStreamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormat">videoFormat</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributes"></a>

```typescript
public readonly attributes: MediaconnectFlowMediaStreamAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference">MediaconnectFlowMediaStreamAttributesOutputReference</a>

---

##### `fmt`<sup>Required</sup> <a name="fmt" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fmt"></a>

```typescript
public readonly fmt: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tags"></a>

```typescript
public readonly tags: MediaconnectFlowMediaStreamTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList">MediaconnectFlowMediaStreamTagsList</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | MediaconnectFlowMediaStreamAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

---

##### `clockRateInput`<sup>Optional</sup> <a name="clockRateInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRateInput"></a>

```typescript
public readonly clockRateInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `flowArnInput`<sup>Optional</sup> <a name="flowArnInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArnInput"></a>

```typescript
public readonly flowArnInput: string;
```

- *Type:* string

---

##### `mediaStreamIdInput`<sup>Optional</sup> <a name="mediaStreamIdInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamIdInput"></a>

```typescript
public readonly mediaStreamIdInput: number;
```

- *Type:* number

---

##### `mediaStreamNameInput`<sup>Optional</sup> <a name="mediaStreamNameInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamNameInput"></a>

```typescript
public readonly mediaStreamNameInput: string;
```

- *Type:* string

---

##### `mediaStreamTypeInput`<sup>Optional</sup> <a name="mediaStreamTypeInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamTypeInput"></a>

```typescript
public readonly mediaStreamTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MediaconnectFlowMediaStreamTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>[]

---

##### `videoFormatInput`<sup>Optional</sup> <a name="videoFormatInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormatInput"></a>

```typescript
public readonly videoFormatInput: string;
```

- *Type:* string

---

##### `clockRate`<sup>Required</sup> <a name="clockRate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRate"></a>

```typescript
public readonly clockRate: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

---

##### `mediaStreamId`<sup>Required</sup> <a name="mediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamId"></a>

```typescript
public readonly mediaStreamId: number;
```

- *Type:* number

---

##### `mediaStreamName`<sup>Required</sup> <a name="mediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamName"></a>

```typescript
public readonly mediaStreamName: string;
```

- *Type:* string

---

##### `mediaStreamType`<sup>Required</sup> <a name="mediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamType"></a>

```typescript
public readonly mediaStreamType: string;
```

- *Type:* string

---

##### `videoFormat`<sup>Required</sup> <a name="videoFormat" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormat"></a>

```typescript
public readonly videoFormat: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowMediaStreamAttributes <a name="MediaconnectFlowMediaStreamAttributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.Initializer"></a>

```typescript
import { mediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

const mediaconnectFlowMediaStreamAttributes: mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.fmtp">fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a></code> | A set of parameters that define the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.lang">lang</a></code> | <code>string</code> | The audio language, in a format that is recognized by the receiver. |

---

##### `fmtp`<sup>Optional</sup> <a name="fmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.fmtp"></a>

```typescript
public readonly fmtp: MediaconnectFlowMediaStreamAttributesFmtp;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

A set of parameters that define the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#fmtp MediaconnectFlowMediaStream#fmtp}

---

##### `lang`<sup>Optional</sup> <a name="lang" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.lang"></a>

```typescript
public readonly lang: string;
```

- *Type:* string

The audio language, in a format that is recognized by the receiver.

Can only be specified for an audio media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#lang MediaconnectFlowMediaStream#lang}

---

### MediaconnectFlowMediaStreamAttributesFmtp <a name="MediaconnectFlowMediaStreamAttributesFmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.Initializer"></a>

```typescript
import { mediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

const mediaconnectFlowMediaStreamAttributesFmtp: mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.channelOrder">channelOrder</a></code> | <code>string</code> | The format of the audio channel. Can only be specified for an audio media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.colorimetry">colorimetry</a></code> | <code>string</code> | The format used for the representation of color. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.exactFramerate">exactFramerate</a></code> | <code>string</code> | The frame rate for the video stream, in frames/second. For example: 60000/1001. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.par">par</a></code> | <code>string</code> | The pixel aspect ratio (PAR) of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.range">range</a></code> | <code>string</code> | The encoding range of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.scanMode">scanMode</a></code> | <code>string</code> | The type of compression that was used to smooth the video's appearance. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.tcs">tcs</a></code> | <code>string</code> | The transfer characteristic system (TCS) that is used in the video. |

---

##### `channelOrder`<sup>Optional</sup> <a name="channelOrder" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.channelOrder"></a>

```typescript
public readonly channelOrder: string;
```

- *Type:* string

The format of the audio channel. Can only be specified for an audio media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#channel_order MediaconnectFlowMediaStream#channel_order}

---

##### `colorimetry`<sup>Optional</sup> <a name="colorimetry" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.colorimetry"></a>

```typescript
public readonly colorimetry: string;
```

- *Type:* string

The format used for the representation of color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#colorimetry MediaconnectFlowMediaStream#colorimetry}

---

##### `exactFramerate`<sup>Optional</sup> <a name="exactFramerate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.exactFramerate"></a>

```typescript
public readonly exactFramerate: string;
```

- *Type:* string

The frame rate for the video stream, in frames/second. For example: 60000/1001.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#exact_framerate MediaconnectFlowMediaStream#exact_framerate}

---

##### `par`<sup>Optional</sup> <a name="par" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.par"></a>

```typescript
public readonly par: string;
```

- *Type:* string

The pixel aspect ratio (PAR) of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#par MediaconnectFlowMediaStream#par}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

The encoding range of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#range MediaconnectFlowMediaStream#range}

---

##### `scanMode`<sup>Optional</sup> <a name="scanMode" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.scanMode"></a>

```typescript
public readonly scanMode: string;
```

- *Type:* string

The type of compression that was used to smooth the video's appearance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#scan_mode MediaconnectFlowMediaStream#scan_mode}

---

##### `tcs`<sup>Optional</sup> <a name="tcs" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.tcs"></a>

```typescript
public readonly tcs: string;
```

- *Type:* string

The transfer characteristic system (TCS) that is used in the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#tcs MediaconnectFlowMediaStream#tcs}

---

### MediaconnectFlowMediaStreamConfig <a name="MediaconnectFlowMediaStreamConfig" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.Initializer"></a>

```typescript
import { mediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

const mediaconnectFlowMediaStreamConfig: mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.flowArn">flowArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the flow that the media stream belongs to. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamId">mediaStreamId</a></code> | <code>number</code> | A unique identifier for the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamName">mediaStreamName</a></code> | <code>string</code> | A name that helps you distinguish one media stream from another. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamType">mediaStreamType</a></code> | <code>string</code> | The type of media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a></code> | Attributes that are related to the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.clockRate">clockRate</a></code> | <code>number</code> | The sample rate (in Hz) for the stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.description">description</a></code> | <code>string</code> | A description that can help you quickly identify what your media stream is used for. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>[]</code> | The key-value pairs that can be used to tag and organize the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.videoFormat">videoFormat</a></code> | <code>string</code> | The resolution of the video. Required for a video media stream and rejected for other media stream types. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the flow that the media stream belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#flow_arn MediaconnectFlowMediaStream#flow_arn}

---

##### `mediaStreamId`<sup>Required</sup> <a name="mediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamId"></a>

```typescript
public readonly mediaStreamId: number;
```

- *Type:* number

A unique identifier for the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#media_stream_id MediaconnectFlowMediaStream#media_stream_id}

---

##### `mediaStreamName`<sup>Required</sup> <a name="mediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamName"></a>

```typescript
public readonly mediaStreamName: string;
```

- *Type:* string

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#media_stream_name MediaconnectFlowMediaStream#media_stream_name}

---

##### `mediaStreamType`<sup>Required</sup> <a name="mediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamType"></a>

```typescript
public readonly mediaStreamType: string;
```

- *Type:* string

The type of media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#media_stream_type MediaconnectFlowMediaStream#media_stream_type}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.attributes"></a>

```typescript
public readonly attributes: MediaconnectFlowMediaStreamAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

Attributes that are related to the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#attributes MediaconnectFlowMediaStream#attributes}

---

##### `clockRate`<sup>Optional</sup> <a name="clockRate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.clockRate"></a>

```typescript
public readonly clockRate: number;
```

- *Type:* number

The sample rate (in Hz) for the stream.

If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#clock_rate MediaconnectFlowMediaStream#clock_rate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description that can help you quickly identify what your media stream is used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#description MediaconnectFlowMediaStream#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MediaconnectFlowMediaStreamTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>[]

The key-value pairs that can be used to tag and organize the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#tags MediaconnectFlowMediaStream#tags}

---

##### `videoFormat`<sup>Optional</sup> <a name="videoFormat" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.videoFormat"></a>

```typescript
public readonly videoFormat: string;
```

- *Type:* string

The resolution of the video. Required for a video media stream and rejected for other media stream types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#video_format MediaconnectFlowMediaStream#video_format}

---

### MediaconnectFlowMediaStreamTags <a name="MediaconnectFlowMediaStreamTags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.Initializer"></a>

```typescript
import { mediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

const mediaconnectFlowMediaStreamTags: mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#key MediaconnectFlowMediaStream#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/mediaconnect_flow_media_stream#value MediaconnectFlowMediaStream#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowMediaStreamAttributesFmtpOutputReference <a name="MediaconnectFlowMediaStreamAttributesFmtpOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

new mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetChannelOrder">resetChannelOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetColorimetry">resetColorimetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetExactFramerate">resetExactFramerate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetPar">resetPar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetScanMode">resetScanMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetTcs">resetTcs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelOrder` <a name="resetChannelOrder" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetChannelOrder"></a>

```typescript
public resetChannelOrder(): void
```

##### `resetColorimetry` <a name="resetColorimetry" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetColorimetry"></a>

```typescript
public resetColorimetry(): void
```

##### `resetExactFramerate` <a name="resetExactFramerate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetExactFramerate"></a>

```typescript
public resetExactFramerate(): void
```

##### `resetPar` <a name="resetPar" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetPar"></a>

```typescript
public resetPar(): void
```

##### `resetRange` <a name="resetRange" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetRange"></a>

```typescript
public resetRange(): void
```

##### `resetScanMode` <a name="resetScanMode" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetScanMode"></a>

```typescript
public resetScanMode(): void
```

##### `resetTcs` <a name="resetTcs" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetTcs"></a>

```typescript
public resetTcs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrderInput">channelOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetryInput">colorimetryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerateInput">exactFramerateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.parInput">parInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.rangeInput">rangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanModeInput">scanModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcsInput">tcsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrder">channelOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetry">colorimetry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerate">exactFramerate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.par">par</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.range">range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanMode">scanMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcs">tcs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelOrderInput`<sup>Optional</sup> <a name="channelOrderInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrderInput"></a>

```typescript
public readonly channelOrderInput: string;
```

- *Type:* string

---

##### `colorimetryInput`<sup>Optional</sup> <a name="colorimetryInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetryInput"></a>

```typescript
public readonly colorimetryInput: string;
```

- *Type:* string

---

##### `exactFramerateInput`<sup>Optional</sup> <a name="exactFramerateInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerateInput"></a>

```typescript
public readonly exactFramerateInput: string;
```

- *Type:* string

---

##### `parInput`<sup>Optional</sup> <a name="parInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.parInput"></a>

```typescript
public readonly parInput: string;
```

- *Type:* string

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: string;
```

- *Type:* string

---

##### `scanModeInput`<sup>Optional</sup> <a name="scanModeInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanModeInput"></a>

```typescript
public readonly scanModeInput: string;
```

- *Type:* string

---

##### `tcsInput`<sup>Optional</sup> <a name="tcsInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcsInput"></a>

```typescript
public readonly tcsInput: string;
```

- *Type:* string

---

##### `channelOrder`<sup>Required</sup> <a name="channelOrder" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrder"></a>

```typescript
public readonly channelOrder: string;
```

- *Type:* string

---

##### `colorimetry`<sup>Required</sup> <a name="colorimetry" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetry"></a>

```typescript
public readonly colorimetry: string;
```

- *Type:* string

---

##### `exactFramerate`<sup>Required</sup> <a name="exactFramerate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerate"></a>

```typescript
public readonly exactFramerate: string;
```

- *Type:* string

---

##### `par`<sup>Required</sup> <a name="par" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.par"></a>

```typescript
public readonly par: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

---

##### `scanMode`<sup>Required</sup> <a name="scanMode" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanMode"></a>

```typescript
public readonly scanMode: string;
```

- *Type:* string

---

##### `tcs`<sup>Required</sup> <a name="tcs" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcs"></a>

```typescript
public readonly tcs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowMediaStreamAttributesFmtp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

---


### MediaconnectFlowMediaStreamAttributesOutputReference <a name="MediaconnectFlowMediaStreamAttributesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

new mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp">putFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetFmtp">resetFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetLang">resetLang</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFmtp` <a name="putFmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp"></a>

```typescript
public putFmtp(value: MediaconnectFlowMediaStreamAttributesFmtp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

---

##### `resetFmtp` <a name="resetFmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetFmtp"></a>

```typescript
public resetFmtp(): void
```

##### `resetLang` <a name="resetLang" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetLang"></a>

```typescript
public resetLang(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtp">fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference">MediaconnectFlowMediaStreamAttributesFmtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtpInput">fmtpInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.langInput">langInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.lang">lang</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fmtp`<sup>Required</sup> <a name="fmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtp"></a>

```typescript
public readonly fmtp: MediaconnectFlowMediaStreamAttributesFmtpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference">MediaconnectFlowMediaStreamAttributesFmtpOutputReference</a>

---

##### `fmtpInput`<sup>Optional</sup> <a name="fmtpInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtpInput"></a>

```typescript
public readonly fmtpInput: IResolvable | MediaconnectFlowMediaStreamAttributesFmtp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

---

##### `langInput`<sup>Optional</sup> <a name="langInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.langInput"></a>

```typescript
public readonly langInput: string;
```

- *Type:* string

---

##### `lang`<sup>Required</sup> <a name="lang" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.lang"></a>

```typescript
public readonly lang: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowMediaStreamAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

---


### MediaconnectFlowMediaStreamTagsList <a name="MediaconnectFlowMediaStreamTagsList" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer"></a>

```typescript
import { mediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

new mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.get"></a>

```typescript
public get(index: number): MediaconnectFlowMediaStreamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowMediaStreamTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>[]

---


### MediaconnectFlowMediaStreamTagsOutputReference <a name="MediaconnectFlowMediaStreamTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowMediaStream } from '@cdktn/provider-awscc'

new mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowMediaStreamTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>

---



