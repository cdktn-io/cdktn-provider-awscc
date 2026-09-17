# `storagegatewayTape` Submodule <a name="`storagegatewayTape` Submodule" id="@cdktn/provider-awscc.storagegatewayTape"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayTape <a name="StoragegatewayTape" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape awscc_storagegateway_tape}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer"></a>

```typescript
import { storagegatewayTape } from '@cdktn/provider-awscc'

new storagegatewayTape.StoragegatewayTape(scope: Construct, id: string, config: StoragegatewayTapeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig">StoragegatewayTapeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig">StoragegatewayTapeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsEncrypted">resetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetPoolId">resetPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTapeBarcode">resetTapeBarcode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetWorm">resetWorm</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.putTags"></a>

```typescript
public putTags(value: IResolvable | StoragegatewayTapeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>[]

---

##### `resetKmsEncrypted` <a name="resetKmsEncrypted" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsEncrypted"></a>

```typescript
public resetKmsEncrypted(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetPoolId` <a name="resetPoolId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetPoolId"></a>

```typescript
public resetPoolId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTapeBarcode` <a name="resetTapeBarcode" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTapeBarcode"></a>

```typescript
public resetTapeBarcode(): void
```

##### `resetWorm` <a name="resetWorm" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetWorm"></a>

```typescript
public resetWorm(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StoragegatewayTape resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isConstruct"></a>

```typescript
import { storagegatewayTape } from '@cdktn/provider-awscc'

storagegatewayTape.StoragegatewayTape.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformElement"></a>

```typescript
import { storagegatewayTape } from '@cdktn/provider-awscc'

storagegatewayTape.StoragegatewayTape.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformResource"></a>

```typescript
import { storagegatewayTape } from '@cdktn/provider-awscc'

storagegatewayTape.StoragegatewayTape.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport"></a>

```typescript
import { storagegatewayTape } from '@cdktn/provider-awscc'

storagegatewayTape.StoragegatewayTape.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StoragegatewayTape resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StoragegatewayTape to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StoragegatewayTape that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewayTape to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList">StoragegatewayTapeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeArn">tapeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeCreatedDate">tapeCreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeStatus">tapeStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeUsedInBytes">tapeUsedInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArnInput">gatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncryptedInput">kmsEncryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolIdInput">poolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcodeInput">tapeBarcodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytesInput">tapeSizeInBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.wormInput">wormInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncrypted">kmsEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolId">poolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcode">tapeBarcode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytes">tapeSizeInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.worm">worm</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tags"></a>

```typescript
public readonly tags: StoragegatewayTapeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList">StoragegatewayTapeTagsList</a>

---

##### `tapeArn`<sup>Required</sup> <a name="tapeArn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeArn"></a>

```typescript
public readonly tapeArn: string;
```

- *Type:* string

---

##### `tapeCreatedDate`<sup>Required</sup> <a name="tapeCreatedDate" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeCreatedDate"></a>

```typescript
public readonly tapeCreatedDate: string;
```

- *Type:* string

---

##### `tapeStatus`<sup>Required</sup> <a name="tapeStatus" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeStatus"></a>

```typescript
public readonly tapeStatus: string;
```

- *Type:* string

---

##### `tapeUsedInBytes`<sup>Required</sup> <a name="tapeUsedInBytes" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeUsedInBytes"></a>

```typescript
public readonly tapeUsedInBytes: number;
```

- *Type:* number

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArnInput"></a>

```typescript
public readonly gatewayArnInput: string;
```

- *Type:* string

---

##### `kmsEncryptedInput`<sup>Optional</sup> <a name="kmsEncryptedInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncryptedInput"></a>

```typescript
public readonly kmsEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `poolIdInput`<sup>Optional</sup> <a name="poolIdInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolIdInput"></a>

```typescript
public readonly poolIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | StoragegatewayTapeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>[]

---

##### `tapeBarcodeInput`<sup>Optional</sup> <a name="tapeBarcodeInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcodeInput"></a>

```typescript
public readonly tapeBarcodeInput: string;
```

- *Type:* string

---

##### `tapeSizeInBytesInput`<sup>Optional</sup> <a name="tapeSizeInBytesInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytesInput"></a>

```typescript
public readonly tapeSizeInBytesInput: number;
```

- *Type:* number

---

##### `wormInput`<sup>Optional</sup> <a name="wormInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.wormInput"></a>

```typescript
public readonly wormInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncrypted"></a>

```typescript
public readonly kmsEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

---

##### `tapeBarcode`<sup>Required</sup> <a name="tapeBarcode" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcode"></a>

```typescript
public readonly tapeBarcode: string;
```

- *Type:* string

---

##### `tapeSizeInBytes`<sup>Required</sup> <a name="tapeSizeInBytes" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytes"></a>

```typescript
public readonly tapeSizeInBytes: number;
```

- *Type:* number

---

##### `worm`<sup>Required</sup> <a name="worm" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.worm"></a>

```typescript
public readonly worm: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayTapeConfig <a name="StoragegatewayTapeConfig" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.Initializer"></a>

```typescript
import { storagegatewayTape } from '@cdktn/provider-awscc'

const storagegatewayTapeConfig: storagegatewayTape.StoragegatewayTapeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Tape Gateway that hosts the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeSizeInBytes">tapeSizeInBytes</a></code> | <code>number</code> | The size, in bytes, of the virtual tape that you want to create. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsEncrypted">kmsEncrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.poolId">poolId</a></code> | <code>string</code> | The ID of the pool that you want to add your tape to for archiving. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>[]</code> | A list of up to 50 tags to assign to the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeBarcode">tapeBarcode</a></code> | <code>string</code> | The barcode that you want to assign to the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.worm">worm</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to true to create a write-once-read-many (WORM) virtual tape. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Tape Gateway that hosts the virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#gateway_arn StoragegatewayTape#gateway_arn}

---

##### `tapeSizeInBytes`<sup>Required</sup> <a name="tapeSizeInBytes" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeSizeInBytes"></a>

```typescript
public readonly tapeSizeInBytes: number;
```

- *Type:* number

The size, in bytes, of the virtual tape that you want to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#tape_size_in_bytes StoragegatewayTape#tape_size_in_bytes}

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsEncrypted"></a>

```typescript
public readonly kmsEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3.

Optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#kms_encrypted StoragegatewayTape#kms_encrypted}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption.

This value must be set if KMSEncrypted is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#kms_key StoragegatewayTape#kms_key}

---

##### `poolId`<sup>Optional</sup> <a name="poolId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

The ID of the pool that you want to add your tape to for archiving.

Tapes in this pool are archived in the S3 storage class that is associated with the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#pool_id StoragegatewayTape#pool_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | StoragegatewayTapeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>[]

A list of up to 50 tags to assign to the virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#tags StoragegatewayTape#tags}

---

##### `tapeBarcode`<sup>Optional</sup> <a name="tapeBarcode" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeBarcode"></a>

```typescript
public readonly tapeBarcode: string;
```

- *Type:* string

The barcode that you want to assign to the virtual tape.

Barcodes cannot be reused, even after a tape is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#tape_barcode StoragegatewayTape#tape_barcode}

---

##### `worm`<sup>Optional</sup> <a name="worm" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.worm"></a>

```typescript
public readonly worm: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to true to create a write-once-read-many (WORM) virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#worm StoragegatewayTape#worm}

---

### StoragegatewayTapeTags <a name="StoragegatewayTapeTags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.Initializer"></a>

```typescript
import { storagegatewayTape } from '@cdktn/provider-awscc'

const storagegatewayTapeTags: storagegatewayTape.StoragegatewayTapeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.key">key</a></code> | <code>string</code> | The tag key. Cannot be prefixed with aws:. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key. Cannot be prefixed with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#key StoragegatewayTape#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#value StoragegatewayTape#value}

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayTapeTagsList <a name="StoragegatewayTapeTagsList" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer"></a>

```typescript
import { storagegatewayTape } from '@cdktn/provider-awscc'

new storagegatewayTape.StoragegatewayTapeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.get"></a>

```typescript
public get(index: number): StoragegatewayTapeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StoragegatewayTapeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>[]

---


### StoragegatewayTapeTagsOutputReference <a name="StoragegatewayTapeTagsOutputReference" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer"></a>

```typescript
import { storagegatewayTape } from '@cdktn/provider-awscc'

new storagegatewayTape.StoragegatewayTapeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StoragegatewayTapeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>

---



