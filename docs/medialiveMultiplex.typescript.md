# `medialiveMultiplex` Submodule <a name="`medialiveMultiplex` Submodule" id="@cdktn/provider-awscc.medialiveMultiplex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveMultiplex <a name="MedialiveMultiplex" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex awscc_medialive_multiplex}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

new medialiveMultiplex.MedialiveMultiplex(scope: Construct, id: string, config: MedialiveMultiplexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig">MedialiveMultiplexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig">MedialiveMultiplexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings">putMultiplexSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | MedialiveMultiplexDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>[]

---

##### `putMultiplexSettings` <a name="putMultiplexSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings"></a>

```typescript
public putMultiplexSettings(value: MedialiveMultiplexMultiplexSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putTags"></a>

```typescript
public putTags(value: IResolvable | MedialiveMultiplexTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>[]

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveMultiplex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isConstruct"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

medialiveMultiplex.MedialiveMultiplex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformElement"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

medialiveMultiplex.MedialiveMultiplex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformResource"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

medialiveMultiplex.MedialiveMultiplex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

medialiveMultiplex.MedialiveMultiplex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MedialiveMultiplex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MedialiveMultiplex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MedialiveMultiplex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveMultiplex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList">MedialiveMultiplexDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexId">multiplexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettings">multiplexSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference">MedialiveMultiplexMultiplexSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.pipelinesRunningCount">pipelinesRunningCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.programCount">programCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList">MedialiveMultiplexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.destinationsInput">destinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettingsInput">multiplexSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.destinations"></a>

```typescript
public readonly destinations: MedialiveMultiplexDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList">MedialiveMultiplexDestinationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multiplexId`<sup>Required</sup> <a name="multiplexId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexId"></a>

```typescript
public readonly multiplexId: string;
```

- *Type:* string

---

##### `multiplexSettings`<sup>Required</sup> <a name="multiplexSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettings"></a>

```typescript
public readonly multiplexSettings: MedialiveMultiplexMultiplexSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference">MedialiveMultiplexMultiplexSettingsOutputReference</a>

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="pipelinesRunningCount" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.pipelinesRunningCount"></a>

```typescript
public readonly pipelinesRunningCount: number;
```

- *Type:* number

---

##### `programCount`<sup>Required</sup> <a name="programCount" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.programCount"></a>

```typescript
public readonly programCount: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tags"></a>

```typescript
public readonly tags: MedialiveMultiplexTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList">MedialiveMultiplexTagsList</a>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | MedialiveMultiplexDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>[]

---

##### `multiplexSettingsInput`<sup>Optional</sup> <a name="multiplexSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettingsInput"></a>

```typescript
public readonly multiplexSettingsInput: IResolvable | MedialiveMultiplexMultiplexSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MedialiveMultiplexTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>[]

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveMultiplexConfig <a name="MedialiveMultiplexConfig" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

const medialiveMultiplexConfig: medialiveMultiplex.MedialiveMultiplexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | A list of availability zones for the multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.multiplexSettings">multiplexSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | Configuration for a multiplex event. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.name">name</a></code> | <code>string</code> | Name of multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>[]</code> | A list of the multiplex output destinations. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>[]</code> | A collection of key-value pairs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

A list of availability zones for the multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#availability_zones MedialiveMultiplex#availability_zones}

---

##### `multiplexSettings`<sup>Required</sup> <a name="multiplexSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.multiplexSettings"></a>

```typescript
public readonly multiplexSettings: MedialiveMultiplexMultiplexSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

Configuration for a multiplex event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#multiplex_settings MedialiveMultiplex#multiplex_settings}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#name MedialiveMultiplex#name}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | MedialiveMultiplexDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>[]

A list of the multiplex output destinations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#destinations MedialiveMultiplex#destinations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MedialiveMultiplexTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>[]

A collection of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#tags MedialiveMultiplex#tags}

---

### MedialiveMultiplexDestinations <a name="MedialiveMultiplexDestinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

const medialiveMultiplexDestinations: medialiveMultiplex.MedialiveMultiplexDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations.property.multiplexMediaConnectOutputDestinationSettings">multiplexMediaConnectOutputDestinationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a></code> | Multiplex MediaConnect output destination settings. |

---

##### `multiplexMediaConnectOutputDestinationSettings`<sup>Optional</sup> <a name="multiplexMediaConnectOutputDestinationSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations.property.multiplexMediaConnectOutputDestinationSettings"></a>

```typescript
public readonly multiplexMediaConnectOutputDestinationSettings: MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a>

Multiplex MediaConnect output destination settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#multiplex_media_connect_output_destination_settings MedialiveMultiplex#multiplex_media_connect_output_destination_settings}

---

### MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings <a name="MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

const medialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings: medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings.property.entitlementArn">entitlementArn</a></code> | <code>string</code> | The MediaConnect entitlement ARN available as a Flow source. |

---

##### `entitlementArn`<sup>Optional</sup> <a name="entitlementArn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings.property.entitlementArn"></a>

```typescript
public readonly entitlementArn: string;
```

- *Type:* string

The MediaConnect entitlement ARN available as a Flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#entitlement_arn MedialiveMultiplex#entitlement_arn}

---

### MedialiveMultiplexMultiplexSettings <a name="MedialiveMultiplexMultiplexSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

const medialiveMultiplexMultiplexSettings: medialiveMultiplex.MedialiveMultiplexMultiplexSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamBitrate">transportStreamBitrate</a></code> | <code>number</code> | Transport stream bit rate. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamId">transportStreamId</a></code> | <code>number</code> | Transport stream ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds">maximumVideoBufferDelayMilliseconds</a></code> | <code>number</code> | Maximum video buffer delay in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamReservedBitrate">transportStreamReservedBitrate</a></code> | <code>number</code> | Transport stream reserved bit rate. |

---

##### `transportStreamBitrate`<sup>Required</sup> <a name="transportStreamBitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamBitrate"></a>

```typescript
public readonly transportStreamBitrate: number;
```

- *Type:* number

Transport stream bit rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#transport_stream_bitrate MedialiveMultiplex#transport_stream_bitrate}

---

##### `transportStreamId`<sup>Required</sup> <a name="transportStreamId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamId"></a>

```typescript
public readonly transportStreamId: number;
```

- *Type:* number

Transport stream ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#transport_stream_id MedialiveMultiplex#transport_stream_id}

---

##### `maximumVideoBufferDelayMilliseconds`<sup>Optional</sup> <a name="maximumVideoBufferDelayMilliseconds" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds"></a>

```typescript
public readonly maximumVideoBufferDelayMilliseconds: number;
```

- *Type:* number

Maximum video buffer delay in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#maximum_video_buffer_delay_milliseconds MedialiveMultiplex#maximum_video_buffer_delay_milliseconds}

---

##### `transportStreamReservedBitrate`<sup>Optional</sup> <a name="transportStreamReservedBitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamReservedBitrate"></a>

```typescript
public readonly transportStreamReservedBitrate: number;
```

- *Type:* number

Transport stream reserved bit rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#transport_stream_reserved_bitrate MedialiveMultiplex#transport_stream_reserved_bitrate}

---

### MedialiveMultiplexTags <a name="MedialiveMultiplexTags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

const medialiveMultiplexTags: medialiveMultiplex.MedialiveMultiplexTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#key MedialiveMultiplex#key}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#value MedialiveMultiplex#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#key MedialiveMultiplex#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_multiplex#value MedialiveMultiplex#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveMultiplexDestinationsList <a name="MedialiveMultiplexDestinationsList" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

new medialiveMultiplex.MedialiveMultiplexDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.get"></a>

```typescript
public get(index: number): MedialiveMultiplexDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>[]

---


### MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference <a name="MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

new medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resetEntitlementArn">resetEntitlementArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntitlementArn` <a name="resetEntitlementArn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resetEntitlementArn"></a>

```typescript
public resetEntitlementArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.entitlementArnInput">entitlementArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.entitlementArn">entitlementArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entitlementArnInput`<sup>Optional</sup> <a name="entitlementArnInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.entitlementArnInput"></a>

```typescript
public readonly entitlementArnInput: string;
```

- *Type:* string

---

##### `entitlementArn`<sup>Required</sup> <a name="entitlementArn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.entitlementArn"></a>

```typescript
public readonly entitlementArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a>

---


### MedialiveMultiplexDestinationsOutputReference <a name="MedialiveMultiplexDestinationsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

new medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.putMultiplexMediaConnectOutputDestinationSettings">putMultiplexMediaConnectOutputDestinationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resetMultiplexMediaConnectOutputDestinationSettings">resetMultiplexMediaConnectOutputDestinationSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiplexMediaConnectOutputDestinationSettings` <a name="putMultiplexMediaConnectOutputDestinationSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.putMultiplexMediaConnectOutputDestinationSettings"></a>

```typescript
public putMultiplexMediaConnectOutputDestinationSettings(value: MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.putMultiplexMediaConnectOutputDestinationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a>

---

##### `resetMultiplexMediaConnectOutputDestinationSettings` <a name="resetMultiplexMediaConnectOutputDestinationSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resetMultiplexMediaConnectOutputDestinationSettings"></a>

```typescript
public resetMultiplexMediaConnectOutputDestinationSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.multiplexMediaConnectOutputDestinationSettings">multiplexMediaConnectOutputDestinationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.multiplexMediaConnectOutputDestinationSettingsInput">multiplexMediaConnectOutputDestinationSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multiplexMediaConnectOutputDestinationSettings`<sup>Required</sup> <a name="multiplexMediaConnectOutputDestinationSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.multiplexMediaConnectOutputDestinationSettings"></a>

```typescript
public readonly multiplexMediaConnectOutputDestinationSettings: MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference</a>

---

##### `multiplexMediaConnectOutputDestinationSettingsInput`<sup>Optional</sup> <a name="multiplexMediaConnectOutputDestinationSettingsInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.multiplexMediaConnectOutputDestinationSettingsInput"></a>

```typescript
public readonly multiplexMediaConnectOutputDestinationSettingsInput: IResolvable | MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>

---


### MedialiveMultiplexMultiplexSettingsOutputReference <a name="MedialiveMultiplexMultiplexSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

new medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetMaximumVideoBufferDelayMilliseconds">resetMaximumVideoBufferDelayMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetTransportStreamReservedBitrate">resetTransportStreamReservedBitrate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumVideoBufferDelayMilliseconds` <a name="resetMaximumVideoBufferDelayMilliseconds" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetMaximumVideoBufferDelayMilliseconds"></a>

```typescript
public resetMaximumVideoBufferDelayMilliseconds(): void
```

##### `resetTransportStreamReservedBitrate` <a name="resetTransportStreamReservedBitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetTransportStreamReservedBitrate"></a>

```typescript
public resetTransportStreamReservedBitrate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMillisecondsInput">maximumVideoBufferDelayMillisecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrateInput">transportStreamBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamIdInput">transportStreamIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrateInput">transportStreamReservedBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMilliseconds">maximumVideoBufferDelayMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrate">transportStreamBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamId">transportStreamId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrate">transportStreamReservedBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumVideoBufferDelayMillisecondsInput`<sup>Optional</sup> <a name="maximumVideoBufferDelayMillisecondsInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMillisecondsInput"></a>

```typescript
public readonly maximumVideoBufferDelayMillisecondsInput: number;
```

- *Type:* number

---

##### `transportStreamBitrateInput`<sup>Optional</sup> <a name="transportStreamBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrateInput"></a>

```typescript
public readonly transportStreamBitrateInput: number;
```

- *Type:* number

---

##### `transportStreamIdInput`<sup>Optional</sup> <a name="transportStreamIdInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamIdInput"></a>

```typescript
public readonly transportStreamIdInput: number;
```

- *Type:* number

---

##### `transportStreamReservedBitrateInput`<sup>Optional</sup> <a name="transportStreamReservedBitrateInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrateInput"></a>

```typescript
public readonly transportStreamReservedBitrateInput: number;
```

- *Type:* number

---

##### `maximumVideoBufferDelayMilliseconds`<sup>Required</sup> <a name="maximumVideoBufferDelayMilliseconds" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMilliseconds"></a>

```typescript
public readonly maximumVideoBufferDelayMilliseconds: number;
```

- *Type:* number

---

##### `transportStreamBitrate`<sup>Required</sup> <a name="transportStreamBitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrate"></a>

```typescript
public readonly transportStreamBitrate: number;
```

- *Type:* number

---

##### `transportStreamId`<sup>Required</sup> <a name="transportStreamId" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamId"></a>

```typescript
public readonly transportStreamId: number;
```

- *Type:* number

---

##### `transportStreamReservedBitrate`<sup>Required</sup> <a name="transportStreamReservedBitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrate"></a>

```typescript
public readonly transportStreamReservedBitrate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexMultiplexSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

---


### MedialiveMultiplexTagsList <a name="MedialiveMultiplexTagsList" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

new medialiveMultiplex.MedialiveMultiplexTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.get"></a>

```typescript
public get(index: number): MedialiveMultiplexTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>[]

---


### MedialiveMultiplexTagsOutputReference <a name="MedialiveMultiplexTagsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplex } from '@cdktn/provider-awscc'

new medialiveMultiplex.MedialiveMultiplexTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>

---



